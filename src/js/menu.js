import '../css/menu.css';
import BUSINESS_DATA from '../data/business.json';
import MENU_DATA from '../data/menu.json';
import { createElement } from '../js/utils.js';

function createNotification() {
    const notification = createElement({
        tagName: 'p',
        classList: ['notification'],
        content: `Ovo je demostracija menija. Ažurirani meni možete videti na <a href="https://www.instagram.com/${BUSINESS_DATA.instagram}/" target="_blank">${BUSINESS_DATA.instagram}</a>`,
        useInnerHTML: true
    });
    return notification;
}

function createCategoryHeading(category) {
    const categoryHeading = createElement({
        tagName: 'h2',
        classList: ['title'],
        content: `&nbsp;${category}&nbsp;`,
        useInnerHTML: true
    });
    return categoryHeading;
}

function createMenuItems(items) {
    const menuItems = createElement({
        tagName: 'div',
        classList: ['menu-items']
    });

    for (const item of items) {
        const menuItem = createMenuItem(item);
        menuItems.appendChild(menuItem);
    }
    return menuItems;
}

function createMenuItem({ title, description, price }) {
    const menuItem = createElement({
        tagName: 'div',
        classList: ['menu-item']
    });

    const menuItemHeader = createElement({
        tagName: 'div',
        classList: ['menu-item-header']
    });

    const menuItemTitle = createElement({
        tagName: 'span',
        classList: ['menu-item-title'],
        content: title
    });
    menuItemHeader.appendChild(menuItemTitle);

    const menuItemSeparator = createElement({
        tagName: 'span',
        classList: ['menu-item-separator']
    });
    menuItemHeader.appendChild(menuItemSeparator);

    const menuItemPrice = createElement({
        tagName: 'span',
        classList: ['menu-item-price'],
        content: price
    });
    menuItemHeader.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemHeader);

    if (description) {
        const menuItemDescription = createElement({
            tagName: 'div',
            classList: ['menu-item-description'],
            content: description
        });
        menuItem.appendChild(menuItemDescription);
    }

    return menuItem;
}

function loadMenuContent(contentContainer) {
    const notification = createNotification();
    contentContainer.appendChild(notification);

    for (const { category, items } of MENU_DATA) {
        const categoryHeading = createCategoryHeading(category);
        contentContainer.appendChild(categoryHeading);

        const menuItems = createMenuItems(items);
        contentContainer.appendChild(menuItems);
    }
}

export default loadMenuContent;
