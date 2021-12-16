import '../css/main.css';

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

async function loadTabContent(tabName) {
    document.body.dataset.activeTab = tabName;
    contentContainer.textContent = '';

    // TODO: Add loading overlay
    console.log('LOADING MODULE...');
    const module = await import(`../js/${tabName}.js`);
    console.log('FINISHED LOADING MODULE!');
    module.default(contentContainer);
}

window.addEventListener('hashchange', handleUrlHashChange);
