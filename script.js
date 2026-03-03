/**
 * Data Array: Dynamic Prompts
 * Contains all the prompt information.
 */
const promptsData = [
    { id: 1, category: 'Coding', title: 'React Landing Page', description: 'Generate a basic React component structure with Tailwind.', fullPrompt: 'Create a modern, responsive landing page using React and Tailwind CSS. Include a Hero section, Features grid, and a Footer. Ensure semantic HTML.' },
    { id: 2, category: 'Image', title: 'Cyberpunk Cityscape', description: 'Midjourney prompt for a neon city.', fullPrompt: 'A hyper-realistic cyberpunk city street at night, neon lights reflecting in puddles, cinematic lighting, 8k resolution, photorealistic, --ar 16:9 --v 6.0' },
    { id: 3, category: 'Social', title: 'Viral Twitter Hook', description: 'Hook templates for X/Twitter threads.', fullPrompt: 'Write 5 engaging Twitter hooks about [Topic]. The hooks should create an "information gap" and promise a specific outcome to stop the scroll.' },
    { id: 4, category: 'Video', title: 'Cinematic Drone Shot', description: 'Sora/Runway prompt for drone footage.', fullPrompt: 'Smooth FPV drone shot flying through a dense misty pine forest at sunrise. Sunbeams piercing trees, cinematic color grading, 4k, 60fps.' },
    { id: 5, category: 'Music', title: 'Synthwave Track', description: 'Suno/Udio prompt for retro music.', fullPrompt: 'Upbeat 80s synthwave track with a driving bassline, retro drum machines, and a soaring synthesizer melody. Energetic pacing, instrumental.' },
    { id: 6, category: 'Coding', title: 'Python Web Scraper', description: 'BeautifulSoup script generator.', fullPrompt: 'Write a Python script using requests and BeautifulSoup to scrape product names and prices from an e-commerce page. Include error handling.' },
    { id: 7, category: 'Image', title: 'Minimalist Logo', description: 'Clean vector logo concept.', fullPrompt: 'A minimalist abstract logo for a tech startup. Flat design, vector style, 2-color palette (navy and coral), clean lines, white background.' },
    { id: 8, category: 'Social', title: 'LinkedIn Milestone', description: 'Professional success post template.', fullPrompt: 'Write a relatable LinkedIn post about overcoming a recent professional failure. Include an emotional hook, 3 key lessons, and an uplifting conclusion.' },
    { id: 9, category: 'Video', title: 'Macro Nature', description: 'Close-up slow motion prompt.', fullPrompt: 'Extreme macro slow-motion video of a water drop falling onto a vibrant green leaf, creating a perfect crown splash. High detail, shallow depth of field.' },
    { id: 10, category: 'Coding', title: 'SQL Optimizer', description: 'Prompt to improve DB queries.', fullPrompt: 'Act as a senior database administrator. Analyze the following SQL query for performance bottlenecks and rewrite it for optimal execution speed.' },
    { id: 11, category: 'Image', title: 'Watercolor Portrait', description: 'Soft artistic portrait prompt.', fullPrompt: 'A beautiful watercolor portrait of a young woman with flowers in her hair, soft pastel colors, ethereal lighting, high detail, artistic style.' },
    { id: 12, category: 'Music', title: 'Lo-Fi Chillhop', description: 'Relaxing background beats.', fullPrompt: 'Relaxing lo-fi chillhop beat with a slow tempo, vinyl crackle, soft piano chords, and a mellow hip-hop drum groove. Suitable for studying.' }
];

// --- Application State ---
let state = {
    searchQuery: '',
    categoryFilter: 'All', // 'All', 'Video', 'Image', 'Music', 'Coding', 'Social', 'Favorites'
    currentPage: 1,
    itemsPerPage: 6,
    favorites: JSON.parse(localStorage.getItem('savedFavorites')) || []
};

// --- DOM Elements ---
const dom = {
    loader: document.getElementById('loader'),
    promptGrid: document.getElementById('prompt-grid'),
    searchInput: document.getElementById('search-input'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    prevBtn: document.getElementById('prev-page'),
    nextBtn: document.getElementById('next-page'),
    pageInfo: document.getElementById('page-info'),
    paginationControls: document.getElementById('pagination-controls'),
    toastContainer: document.getElementById('toast-container'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon')
};

// --- Initialization ---
function init() {
    setupTheme();
    setupEventListeners();
    setupScrollAnimations();
    
    // Simulate initial loading time for visual effect
    setTimeout(() => {
        dom.loader.classList.add('hidden');
        updateUI();
    }, 800);
}

// --- Core Logic ---

/**
 * Filters and paginates the data based on current state,
 * then renders the resulting cards to the DOM.
 */
function updateUI() {
    // 1. Filter Data
    const filteredData = promptsData.filter(prompt => {
        // Search Match
        const searchLower = state.searchQuery.toLowerCase();
        const matchesSearch = prompt.title.toLowerCase().includes(searchLower) || 
                              prompt.fullPrompt.toLowerCase().includes(searchLower);
        
        // Category / Favorites Match
        let matchesCategory = false;
        if (state.categoryFilter === 'All') {
            matchesCategory = true;
        } else if (state.categoryFilter === 'Favorites') {
            matchesCategory = state.favorites.includes(prompt.id);
        } else {
            matchesCategory = prompt.category === state.categoryFilter;
        }

        return matchesSearch && matchesCategory;
    });

    // 2. Calculate Pagination
    const totalPages = Math.ceil(filteredData.length / state.itemsPerPage) || 1;
    
    // Ensure current page is valid after filtering
    if (state.currentPage > totalPages) state.currentPage = totalPages;

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + state.itemsPerPage);

    // 3. Render DOM (with smooth transition)
    dom.promptGrid.classList.add('fading-out');
    
    setTimeout(() => {
        renderCards(paginatedData);
        renderPagination(totalPages, filteredData.length);
        dom.promptGrid.classList.remove('fading-out');
    }, 300); // Matches CSS transition time
}

/**
 * Generates HTML for prompt cards and attaches listeners.
 */
function renderCards(data) {
    dom.promptGrid.innerHTML = '';

    if (data.length === 0) {
        dom.promptGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-ghost" style="font-size: 3rem; margin-bottom: 15px;"></i>
                <h2>No prompts found</h2>
                <p>Try adjusting your search or filters.</p>
            </div>`;
        return;
    }

    data.forEach(prompt => {
        const isFav = state.favorites.includes(prompt.id);
        const card = document.createElement('div');
        card.className = 'prompt-card glass-panel';
        
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <span class="category-badge">${prompt.category}</span>
                    <h3 class="card-title">${prompt.title}</h3>
                </div>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${prompt.id}" aria-label="Toggle Favorite">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
            <p class="card-desc">${prompt.description}</p>
            <div class="prompt-box">${prompt.fullPrompt}</div>
            <button class="copy-btn" data-prompt="${prompt.fullPrompt.replace(/"/g, '&quot;')}">
                <i class="fa-regular fa-copy"></i> Copy Prompt
            </button>
        `;
        dom.promptGrid.appendChild(card);
    });

    attachCardListeners();
}

/**
 * Updates pagination buttons and text.
 */
function renderPagination(totalPages, totalItems) {
    if (totalItems <= state.itemsPerPage) {
        dom.paginationControls.classList.add('hidden');
        return;
    }
    
    dom.paginationControls.classList.remove('hidden');
    dom.pageInfo.textContent = `Page ${state.currentPage} of ${totalPages}`;
    
    dom.prevBtn.disabled = state.currentPage === 1;
    dom.nextBtn.disabled = state.currentPage === totalPages;
}

// --- Event Listeners & Interactions ---

function setupEventListeners() {
    // Live Search
    dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        updateUI();
    });

    // Category Filters
    dom.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active styling
            dom.filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Update state
            state.categoryFilter = e.currentTarget.getAttribute('data-filter');
            state.currentPage = 1;
            updateUI();
        });
    });

    // Pagination Buttons
    dom.prevBtn.addEventListener('click', () => {
        if (state.currentPage > 1) {
            state.currentPage--;
            updateUI();
            scrollToPrompts();
        }
    });

    dom.nextBtn.addEventListener('click', () => {
        state.currentPage++;
        updateUI();
        scrollToPrompts();
    });

    // Theme Toggle
    dom.themeToggle.addEventListener('click', toggleTheme);
}

/**
 * Attaches event listeners to dynamically generated card elements.
 */
function attachCardListeners() {
    // Copy Buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const text = e.currentTarget.getAttribute('data-prompt');
            const originalHTML = e.currentTarget.innerHTML;
            
            try {
                await navigator.clipboard.writeText(text);
                
                // Button micro-interaction
                e.currentTarget.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                e.currentTarget.style.backgroundColor = '#10b981'; // Success Green
                e.currentTarget.style.color = 'white';
                
                showToast('Prompt copied to clipboard!', 'success');
                
                setTimeout(() => {
                    e.currentTarget.innerHTML = originalHTML;
                    e.currentTarget.style = ''; // Reset styles
                }, 2000);
            } catch (err) {
                showToast('Failed to copy prompt.', 'error');
            }
        });
    });

    // Favorite Buttons
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const index = state.favorites.indexOf(id);
            const icon = e.currentTarget.querySelector('i');
            
            if (index === -1) {
                // Add to favorites
                state.favorites.push(id);
                e.currentTarget.classList.add('active');
                icon.classList.replace('fa-regular', 'fa-solid');
                showToast('Added to Favorites');
            } else {
                // Remove from favorites
                state.favorites.splice(index, 1);
                e.currentTarget.classList.remove('active');
                icon.classList.replace('fa-solid', 'fa-regular');
                showToast('Removed from Favorites');
                
                // If currently viewing favorites tab, instantly remove card
                if (state.categoryFilter === 'Favorites') {
                    updateUI();
                }
            }
            
            // Persist to local storage
            localStorage.setItem('savedFavorites', JSON.stringify(state.favorites));
        });
    });
}

// --- Utilities & Effects ---

/**
 * Toast Notification System
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    // Optional: distinct colors based on type
    if (type === 'success') toast.style.backgroundColor = '#10b981';
    if (type === 'error') toast.style.backgroundColor = '#ef4444';

    toast.innerHTML = `<i class="fa-solid fa-info-circle"></i> ${message}`;
    dom.toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // Wait for transition out
    }, 3000);
}

function scrollToPrompts() {
    document.getElementById('prompts-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Dark/Light Mode Theming
 */
function setupTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        dom.themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    if (isLight) {
        dom.themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        dom.themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

/**
 * Intersection Observer for scroll animations
 */
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
}

// Start Application
document.addEventListener('DOMContentLoaded', init);