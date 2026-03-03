// --- Mock Data: AI Prompts ---
const promptData = [
    { id: 1, category: 'coding', title: 'React Landing Page', desc: 'Generate a basic React component structure', text: 'Create a modern, responsive landing page using React and Tailwind CSS. Include a Hero section with a call-to-action, a Features grid (3 columns), and a Footer. Ensure it uses semantic HTML.' },
    { id: 2, category: 'image', title: 'Cyberpunk Cityscape', desc: 'Midjourney prompt for a futuristic city', text: 'A hyper-realistic cyberpunk city street at night, neon lights reflecting in puddles, flying cars in the background, cinematic lighting, 8k resolution, photorealistic, --ar 16:9 --v 6.0' },
    { id: 3, category: 'social', title: 'Viral Twitter Hook', desc: 'Hook templates for X/Twitter threads', text: 'Write 5 engaging Twitter hooks about [Topic]. The hooks should create an "information gap" and promise a specific outcome. Use formatting that stops the scroll.' },
    { id: 4, category: 'video', title: 'Cinematic Drone Shot', desc: 'Sora/Runway prompt for drone footage', text: 'A smooth FPV drone shot flying through a dense, misty pine forest at sunrise. Sunbeams piercing through the trees, cinematic color grading, 4k resolution, 60fps.' },
    { id: 5, category: 'music', title: 'Synthwave Track', desc: 'Suno/Udio prompt for retro music', text: 'Upbeat 80s synthwave track with a driving bassline, retro drum machines, and a soaring synthesizer melody. Neon aesthetic, energetic pacing, instrumental.' },
    { id: 6, category: 'coding', title: 'Python Web Scraper', desc: 'BeautifulSoup script generator', text: 'Write a Python script using requests and BeautifulSoup to scrape product names and prices from an e-commerce page. Include error handling and output the data to a CSV file.' },
    { id: 7, category: 'image', title: 'Minimalist Logo', desc: 'Clean vector logo concept', text: 'A minimalist, abstract logo for a tech startup named [Name]. Flat design, vector style, 2-color palette (navy and coral), clean lines, white background.' },
    { id: 8, category: 'social', title: 'LinkedIn Success Post', desc: 'Professional milestone template', text: 'Write a relatable LinkedIn post about overcoming a recent professional failure. Structure it with an emotional hook, the story of the setback, 3 key lessons learned, and an uplifting conclusion.' },
    { id: 9, category: 'video', title: 'Macro Nature', desc: 'Close-up slow motion prompt', text: 'Extreme macro slow-motion video of a water drop falling onto a vibrant green leaf, creating a perfect crown splash. High detail, shallow depth of field.' },
    { id: 10, category: 'coding', title: 'SQL Query Optimizer', desc: 'Prompt to improve DB queries', text: 'Act as a senior database administrator. Analyze the following SQL query for performance bottlenecks and rewrite it for optimal execution speed. Explain the changes you made.' }
];

// --- State Variables ---
let currentPrompts = [...promptData];
let currentPage = 1;
const itemsPerPage = 6;
let currentFilter = '';
let currentCategory = '';
let showingFavorites = false;

// --- DOM Elements ---
const promptContainer = document.getElementById('prompt-container');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const categoryCards = document.querySelectorAll('.category-card');
const clearFiltersBtn = document.getElementById('clear-filters');
const categoryLabel = document.getElementById('current-category-label');
const showFavoritesBtn = document.getElementById('show-favorites');

// --- Initialize LocalStorage Favorites ---
let favorites = JSON.parse(localStorage.getItem('favPrompts')) || [];

// --- Functions ---

// 1. Render Prompts
function renderPrompts() {
    promptContainer.innerHTML = '';
    
    // Calculate Pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPrompts = currentPrompts.slice(startIndex, endIndex);

    if (paginatedPrompts.length === 0) {
        promptContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No prompts found. Try a different search.</p>`;
        paginationContainer.innerHTML = '';
        return;
    }

    paginatedPrompts.forEach(prompt => {
        const isFav = favorites.includes(prompt.id);
        const card = document.createElement('div');
        card.className = 'prompt-card glass-panel';
        card.innerHTML = `
            <div class="prompt-header">
                <span class="prompt-title">${prompt.title}</span>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${prompt.id}" aria-label="Favorite">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
            <p class="prompt-desc">${prompt.desc}</p>
            <div class="prompt-box">${prompt.text}</div>
            <button class="copy-btn" data-text="${prompt.text.replace(/"/g, '&quot;')}">
                <i class="fa-regular fa-copy"></i> Copy Prompt
            </button>
        `;
        promptContainer.appendChild(card);
    });

    setupCardInteractions();
    renderPagination();
}

// 2. Setup Event Listeners inside Cards
function setupCardInteractions() {
    // Copy Buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const textToCopy = e.currentTarget.getAttribute('data-text');
            try {
                await navigator.clipboard.writeText(textToCopy);
                const originalHTML = e.currentTarget.innerHTML;
                e.currentTarget.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                e.currentTarget.classList.add('copied');
                
                setTimeout(() => {
                    e.currentTarget.innerHTML = originalHTML;
                    e.currentTarget.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });

    // Favorite Buttons
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const icon = e.currentTarget.querySelector('i');
            
            if (favorites.includes(id)) {
                favorites = favorites.filter(favId => favId !== id);
                e.currentTarget.classList.remove('active');
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            } else {
                favorites.push(id);
                e.currentTarget.classList.add('active');
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
            
            localStorage.setItem('favPrompts', JSON.stringify(favorites));
            
            // If currently filtering by favorites, re-render to remove it instantly
            if (showingFavorites) {
                applyFilters();
            }
        });
    });
}

// 3. Render Pagination
function renderPagination() {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(currentPrompts.length / itemsPerPage);

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            renderPrompts();
            document.getElementById('prompts').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        paginationContainer.appendChild(btn);
    }
}

// 4. Apply Search, Category, and Favorite Filters
function applyFilters() {
    currentPrompts = promptData.filter(prompt => {
        const matchesSearch = prompt.title.toLowerCase().includes(currentFilter) || 
                              prompt.text.toLowerCase().includes(currentFilter);
        const matchesCategory = currentCategory === '' || prompt.category === currentCategory;
        const matchesFav = !showingFavorites || favorites.includes(prompt.id);
        
        return matchesSearch && matchesCategory && matchesFav;
    });

    currentPage = 1; // Reset to first page
    renderPrompts();
    
    // Toggle Clear Filters button visibility
    if (currentFilter !== '' || currentCategory !== '' || showingFavorites) {
        clearFiltersBtn.classList.remove('hidden');
    } else {
        clearFiltersBtn.classList.add('hidden');
    }
}

// --- Event Listeners ---

// Search
searchInput.addEventListener('input', (e) => {
    currentFilter = e.target.value.toLowerCase();
    applyFilters();
});

// Category Click
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        currentCategory = card.getAttribute('data-category');
        categoryLabel.innerText = `- ${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}`;
        showingFavorites = false;
        applyFilters();
        document.getElementById('prompts').scrollIntoView({ behavior: 'smooth' });
    });
});

// Show Favorites
showFavoritesBtn.addEventListener('click', () => {
    showingFavorites = true;
    currentCategory = '';
    currentFilter = '';
    searchInput.value = '';
    categoryLabel.innerText = '- Favorites';
    applyFilters();
});

// Clear Filters
clearFiltersBtn.addEventListener('click', () => {
    currentFilter = '';
    currentCategory = '';
    showingFavorites = false;
    searchInput.value = '';
    categoryLabel.innerText = '';
    applyFilters();
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check LocalStorage for Theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Floating Navbar & Scroll Spy
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll Fade-In Animation (Intersection Observer)
const fadeElements = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});

// Initial Render
renderPrompts();