import '../css/menu.css';

const MENU_DATA = [
    {
        category: 'Glavni meni',
        items: [
            {
                title: 'Galska piletina',
                description: 'Pileće belo (200g) u belom sosu sa medom i dižon senfom, pirinčem, šampinjonima, salata.',
                price: 690
            },
            {
                title: 'Beef Bourguignon (veliki)',
                description: 'Juneći ribić (200g), šampinjoni (150g), široki rezanci, salata.',
                price: 720,
            },
            {
                title: 'Beef Bourguignon (mali)',
                description: 'Juneći ribić (120g), šampinjoni, salata.',
                price: 500
            },
            {
                title: 'Rižoto sa šampinjonima (posno)',
                description: 'Šampinjoni (300g), pirinač, salata.',
                price: 420
            }
        ],
    },
    {
        category: 'Salate',
        items: [
            {
                title: 'La petite salata (150g)',
                description: null,
                price: 130
            },
            {
                title: 'La petite salata (200g)',
                description: null,
                price: 150
            },
            {
                title: 'Pileća salata',
                description: null,
                price: 320
            },
            {
                title: 'Tuna salata',
                description: null,
                price: 400
            },
            {
                title: 'Mediteranska salata',
                description: null,
                price: 330
            },
        ]
    },
    {
        category: 'Sokovi',
        items: [
            {
                title: 'Sok od zove (0.3l)',
                description: null,
                price: 100
            },
            {
                title: 'Sok od nane (0.3l)',
                description: null,
                price: 100
            }
        ]
    }
];

function createNotification() {
    const notification = document.createElement('p');
    notification.classList.add('notification');
    notification.innerHTML = 'Ovo je demostracija menija. Ažurirani meni možete videti na <a href="https://www.instagram.com/francuskakuhinjica.ns/" target="_blank">@francuskakuhinjica.ns</a>';
    return notification;
}

function createCategoryHeading(category) {
    const categoryHeading = document.createElement('h2');
    categoryHeading.classList.add('title');
    categoryHeading.innerHTML = `&nbsp;${category}&nbsp;`;
    return categoryHeading;
}

function createMenuItems(items) {
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    for (const item of items) {
        const menuItem = createMenuItem(item);
        menuItems.appendChild(menuItem);
    }
    return menuItems;
}

function createMenuItem({ title, description, price }) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuItemHeader = document.createElement('div');
    menuItemHeader.classList.add('menu-item-header');

    const menuItemTitle = document.createElement('span');
    menuItemTitle.classList.add('menu-item-title');
    menuItemTitle.textContent = title;
    menuItemHeader.appendChild(menuItemTitle);

    const menuItemSeparator = document.createElement('span');
    menuItemSeparator.classList.add('menu-item-separator');
    menuItemHeader.appendChild(menuItemSeparator);

    const menuItemPrice = document.createElement('span');
    menuItemPrice.classList.add('menu-item-price');
    menuItemPrice.textContent = price;
    menuItemHeader.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemHeader);

    if (description) {
        const menuItemDescription = document.createElement('div');
        menuItemDescription.classList.add('menu-item-description');
        menuItemDescription.textContent = description;
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
