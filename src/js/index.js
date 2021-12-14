import '../css/main.css';
import loadHomeContent from './home.js';
import loadMenuContent from './menu.js';
import { debounce } from './utils.js';

const VALID_TAB_NAMES = ['home', 'menu', 'contact'];
const tabs = Array.from(document.querySelectorAll('.tabs .tab'));
let activeTab = null;
tabs.forEach((tab) => {
    if (tab.dataset.tabName === 'menu') {
        activeTab = tab;
        tab.classList.add('active');
    }
    tab.addEventListener('click', debounce(handleTabClick, 500, true));
});
const contentContainer = document.querySelector('#content .container');
loadTabContent(activeTab.dataset.tabName);

function handleTabClick(event) {
    const selectedTab = event.currentTarget;
    const tabName = selectedTab.dataset.tabName;
    if (!tabName || !VALID_TAB_NAMES.includes(tabName) || tabName === activeTab.dataset.tabName) {
        return;
    }
    activeTab.classList.remove('active');
    selectedTab.classList.add('active');
    activeTab = selectedTab;
    loadTabContent(tabName);
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
