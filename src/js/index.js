import '../css/main.css';
import loadHomeContent from './home.js';
import loadMenuContent from './menu.js';
import loadContactContent from './contact.js';

const VALID_TAB_NAMES = ['home', 'menu', 'contact'];
let activeTab = null;
const contentContainer = document.querySelector('#content .container');
handleUrlHashChange();

function handleUrlHashChange() {
    const urlHash = parseUrlHash();
    if (!urlHash) {
        return;
    }
    updateActiveTab(urlHash);
}

function parseUrlHash() {
    const urlHash = window.location.hash.toLowerCase();
    if (!urlHash) {
        return '#home';
    }
    if (!VALID_TAB_NAMES.includes(urlHash.slice(1))) {
        return null;
    }
    return urlHash;
}

function updateActiveTab(urlHash) {
    if (activeTab) {
        activeTab.classList.remove('active');
    }

    activeTab = document.querySelector(`.tabs .tab[href="${urlHash}"]`);
    if (!activeTab) {
        return;
    }

    activeTab.classList.add('active');
    loadTabContent(urlHash.slice(1));
}

function loadTabContent(tabName) {
    document.body.dataset.activeTab = tabName;
    contentContainer.textContent = '';

    switch (tabName) {
        case 'home':
            loadHomeContent(contentContainer);
            break;
        case 'menu':
            loadMenuContent(contentContainer);
            break;
        case 'contact':
            loadContactContent(contentContainer);
            break;
        // no default
    }
}

window.addEventListener('hashchange', handleUrlHashChange);
