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
    document.body.dataset.activeTab = '';
    contentContainer.innerHTML = '<strong>UČITAVANJE...</strong>';
    const module = await import(`../js/${tabName}.js`);
    contentContainer.innerHTML = '';
    document.body.dataset.activeTab = tabName;
    module.default(contentContainer);
    contentContainer.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ], 
        { 
            duration: 500,
            fill: 'forwards' 
        }
    );
}

window.addEventListener('hashchange', handleUrlHashChange);
