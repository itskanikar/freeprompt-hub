/**
 * Data Array: Dynamic Prompts with Categories & AI Names
 * Add your remaining prompts here using this exact format.
 */
const promptsData = [
    // --- ChatGPT (Coding/Writing) ---
    { id: 1, category: 'Coding', aiName: 'ChatGPT', title: 'React Expert', description: 'Setup a modern React architecture.', fullPrompt: 'Act as a Senior React Developer. Set up a folder structure for a highly scalable Next.js application using Tailwind CSS and TypeScript. Explain the reasoning behind your structure.' },
    { id: 2, category: 'Writing', aiName: 'ChatGPT', title: 'Tone Mimic', description: 'Train AI to write in your exact voice.', fullPrompt: 'Analyze the tone, pacing, and vocabulary of the following text block. Then, write a 500-word blog post about [Topic] using that exact same voice: [Insert your text here].' },
    { id: 3, category: 'Coding', aiName: 'ChatGPT', title: 'Code Reviewer', description: 'Find bugs and optimize logic.', fullPrompt: 'Review the following block of code for security vulnerabilities, performance bottlenecks, and readability. Suggest refactored code and explain your changes: [Insert Code].' },
    { id: 4, category: 'Writing', aiName: 'ChatGPT', title: 'SEO Article', description: 'Generate an SEO-optimized blog.', fullPrompt: 'Write a 1200-word SEO article about [Topic]. Include naturally integrated LSI keywords, an engaging introduction, bulleted lists for readability, and a strong call-to-action at the end.' },
    { id: 5, category: 'Coding', aiName: 'ChatGPT', title: 'Regex Generator', description: 'Generate complex regular expressions.', fullPrompt: 'Create a Regular Expression (Regex) in JavaScript that extracts [specific data, e.g., all email addresses ending in @gmail.com] from a block of text. Provide test cases.' },

    // --- Claude (Writing/Analysis) ---
    { id: 6, category: 'Writing', aiName: 'Claude', title: 'Contract Summarizer', description: 'Simplify complex legal documents.', fullPrompt: 'Read the following legal contract and summarize the key obligations, liabilities, and termination clauses in simple, 8th-grade English. Highlight any red flags: [Insert Contract].' },
    { id: 7, category: 'Writing', aiName: 'Claude', title: 'Creative Brainstorm', description: 'Generate unique plot ideas.', fullPrompt: 'Brainstorm 10 unique, high-concept sci-fi story premises that deal with the ethical implications of time travel. Avoid common tropes like the grandfather paradox.' },
    { id: 8, category: 'Coding', aiName: 'Claude', title: 'Data Analysis', description: 'Extract insights from raw data.', fullPrompt: 'Act as a Data Scientist. Analyze this dataset of [Subject]. Identify the top 3 trends, any statistical anomalies, and suggest what business decisions should be made based on this data: [Insert CSV/JSON].' },
    { id: 9, category: 'Writing', aiName: 'Claude', title: 'Debate Prep', description: 'Argue both sides of a topic.', fullPrompt: 'Provide a comprehensive debate brief on the topic of [Topic]. Give me the 3 strongest arguments in favor, the 3 strongest arguments against, and rebuttals for each point.' },
    { id: 10, category: 'Writing', aiName: 'Claude', title: 'Email De-escalation', description: 'Handle angry client emails.', fullPrompt: 'Rewrite the following email response to an angry client. Make it highly empathetic, professional, and solution-oriented, while maintaining firm boundaries: [Insert Draft].' },

    // --- Midjourney (Image) ---
    { id: 11, category: 'Image', aiName: 'Midjourney', title: 'Cinematic Portrait', description: 'Ultra-realistic photography.', fullPrompt: 'Cinematic portrait of a [Subject], shot on 35mm film, anamorphic lens, moody volumetric lighting, cyberpunk neon color palette, photorealistic, highly detailed, --ar 16:9 --style raw --v 6.0' },
    { id: 12, category: 'Image', aiName: 'Midjourney', title: 'Flat Vector Logo', description: 'Clean minimal logo design.', fullPrompt: 'Minimalist flat vector logo of a [Subject/Animal], geometric shapes, vibrant gradients on dark background, modern tech startup style, white background, no text, --no shading --v 6.0' },
    { id: 13, category: 'Image', aiName: 'Midjourney', title: 'Isometric Room', description: 'Cute 3D isometric designs.', fullPrompt: 'A cute isometric 3D render of a cozy gamer bedroom, soft pastel lighting, detailed props, octane render, unreal engine 5, claymation style, --ar 1:1 --v 6.0' },
    { id: 14, category: 'Image', aiName: 'Midjourney', title: 'Watercolor Fantasy', description: 'Soft artistic landscape.', fullPrompt: 'Ethereal watercolor painting of a giant glowing tree in a misty fantasy forest, soft brush strokes, pastel colors, studio ghibli style, magical atmosphere, --ar 3:2 --niji 6' },
    { id: 15, category: 'Image', aiName: 'Midjourney', title: 'Product Photography', description: 'Commercial product shots.', fullPrompt: 'Commercial product photography of a sleek glass perfume bottle resting on a black marble pedestal, splashing water behind it, dramatic studio lighting, 8k resolution, macro photography --ar 4:5' },

    // --- Runway (Video) ---
    { id: 16, category: 'Video', aiName: 'Runway', title: 'Drone Flythrough', description: 'Smooth FPV camera movement.', fullPrompt: 'Smooth FPV drone flight through the ruins of an ancient overgrown temple, cinematic lighting, dense jungle fog, sunbeams, photorealistic, 4k, slow motion.' },
    { id: 17, category: 'Video', aiName: 'Runway', title: 'Macro Fluid Dynamics', description: 'Close up colorful liquid.', fullPrompt: 'Extreme macro slow-motion shot of metallic gold and neon pink paint mixing together. Vibrant colors, high contrast, shallow depth of field, fluid dynamics.' },
    { id: 18, category: 'Video', aiName: 'Runway', title: 'Character Morph', description: 'Cyberpunk face transformation.', fullPrompt: 'A close up portrait of a normal human face seamlessly morphing into a robotic cyborg face. Glowing neon eyes, metallic skin appearing, cinematic lighting.' },
    { id: 19, category: 'Video', aiName: 'Runway', title: 'Time Lapse City', description: 'Fast moving clouds and traffic.', fullPrompt: 'A dramatic day-to-night time-lapse of a futuristic metropolis. Flying cars leaving light trails, clouds rushing over skyscrapers, neon lights turning on, 8k.' },
    { id: 20, category: 'Video', aiName: 'Runway', title: 'Fire Simulation', description: 'Realistic burning effects.', fullPrompt: 'A slow-motion close up of a roaring campfire in the dark. Highly detailed embers floating in the air, realistic physics, bright orange and blue flames.' },

    // --- Suno (Music) ---
    { id: 21, category: 'Music', aiName: 'Suno', title: 'Epic Orchestral', description: 'Movie soundtrack style.', fullPrompt: 'Epic cinematic orchestral soundtrack, Hans Zimmer style, building tension, massive brass sections, pounding taiko drums, sweeping string melodies, instrumental.' },
    { id: 22, category: 'Music', aiName: 'Suno', title: 'Lo-Fi Study Beat', description: 'Relaxing background music.', fullPrompt: 'Chill lo-fi hip hop beat, slow tempo, warm vinyl crackle, gentle electric piano chords, smooth deep bass, rainy day atmosphere, instrumental.' },
    { id: 23, category: 'Music', aiName: 'Suno', title: 'Synthwave Banger', description: '80s retro driving music.', fullPrompt: 'Upbeat 1980s synthwave, fast tempo, driving arpeggiated bassline, retro drum machine, soaring synth lead, neon cyberpunk aesthetic, energetic.' },
    { id: 24, category: 'Music', aiName: 'Suno', title: 'Acoustic Folk', description: 'Warm vocals and guitar.', fullPrompt: 'Warm acoustic indie folk song, male vocal, intimate fingerpicked acoustic guitar, gentle tambourine, melancholic but hopeful lyrics about traveling.' },
    { id: 25, category: 'Music', aiName: 'Suno', title: 'Heavy Metal Riff', description: 'Aggressive guitar track.', fullPrompt: 'Aggressive modern heavy metal track, drop-tuned distorted guitars, blast beat drumming, intense pacing, dark atmosphere, instrumental.' }
];

// --- Application State ---
let state = {
    searchQuery: '',
    categoryFilter: 'All', 
    aiFilter: 'All',       
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

function init() {
    setupTheme();
    setupEventListeners();
    setTimeout(() => {
        dom.loader.classList.add('hidden');
        updateUI();
    }, 800);
}

function updateUI() {
    // 1. Dual-Filter Logic
    const filteredData = promptsData.filter(prompt => {
        // Search Match
        const searchLower = state.searchQuery.toLowerCase();
        const matchesSearch = prompt.title.toLowerCase().includes(searchLower) || 
                              prompt.fullPrompt.toLowerCase().includes(searchLower);
        
        // Category Match (Handles Favorites too)
        let matchesCategory = false;
        if (state.categoryFilter === 'All') {
            matchesCategory = true;
        } else if (state.categoryFilter === 'Favorites') {
            matchesCategory = state.favorites.includes(prompt.id);
        } else {
            matchesCategory = prompt.category === state.categoryFilter;
        }

        // AI Model Match
        let matchesAI = false;
        if (state.aiFilter === 'All') {
            matchesAI = true;
        } else {
            matchesAI = prompt.aiName === state.aiFilter;
        }

        return matchesSearch && matchesCategory && matchesAI;
    });

    const totalPages = Math.ceil(filteredData.length / state.itemsPerPage) || 1;
    if (state.currentPage > totalPages) state.currentPage = totalPages;

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + state.itemsPerPage);

    dom.promptGrid.classList.add('fading-out');
    
    setTimeout(() => {
        renderCards(paginatedData);
        renderPagination(totalPages, filteredData.length);
        dom.promptGrid.classList.remove('fading-out');
    }, 300);
}

function renderCards(data) {
    dom.promptGrid.innerHTML = '';

    if (data.length === 0) {
        dom.promptGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-ghost" style="font-size: 3rem; margin-bottom: 15px;"></i>
                <h2>No prompts found</h2>
                <p>Try adjusting your category or AI model filters.</p>
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
                    <div class="badges-wrapper">
                        <span class="category-badge">${prompt.category}</span>
                        <span class="ai-badge"><i class="fa-solid fa-robot"></i> ${prompt.aiName}</span>
                    </div>
                    <h3 class="card-title">${prompt.title}</h3>
                </div>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${prompt.id}">
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

function setupEventListeners() {
    dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        updateUI();
    });

    dom.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.currentTarget.getAttribute('data-type');
            const filterValue = e.currentTarget.getAttribute('data-filter');

            // Handle UI highlighting based on which row was clicked
            document.querySelectorAll(`.filter-btn[data-type="${type}"]`).forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Update the correct state variable
            if (type === 'category') state.categoryFilter = filterValue;
            if (type === 'ai') state.aiFilter = filterValue;
            
            state.currentPage = 1;
            updateUI();
        });
    });

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

    dom.themeToggle.addEventListener('click', toggleTheme);
}

function attachCardListeners() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const text = e.currentTarget.getAttribute('data-prompt');
            const originalHTML = e.currentTarget.innerHTML;
            
            try {
                await navigator.clipboard.writeText(text);
                e.currentTarget.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                e.currentTarget.style.backgroundColor = '#10b981'; 
                e.currentTarget.style.color = 'white';
                showToast('Prompt copied!', 'success');
                
                setTimeout(() => {
                    e.currentTarget.innerHTML = originalHTML;
                    e.currentTarget.style = ''; 
                }, 2000);
            } catch (err) {
                showToast('Failed to copy', 'error');
            }
        });
    });

    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const index = state.favorites.indexOf(id);
            const icon = e.currentTarget.querySelector('i');
            
            if (index === -1) {
                state.favorites.push(id);
                e.currentTarget.classList.add('active');
                icon.classList.replace('fa-regular', 'fa-solid');
                showToast('Added to Favorites');
            } else {
                state.favorites.splice(index, 1);
                e.currentTarget.classList.remove('active');
                icon.classList.replace('fa-solid', 'fa-regular');
                showToast('Removed from Favorites');
                if (state.categoryFilter === 'Favorites') updateUI();
            }
            
            localStorage.setItem('savedFavorites', JSON.stringify(state.favorites));
        });
    });
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'success') toast.style.backgroundColor = '#10b981';
    if (type === 'error') toast.style.backgroundColor = '#ef4444';

    toast.innerHTML = `<i class="fa-solid fa-info-circle"></i> ${message}`;
    dom.toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function scrollToPrompts() {
    document.getElementById('prompts-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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

document.addEventListener('DOMContentLoaded', init);