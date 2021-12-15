import '../css/contact.css';

const BUSINESS_HOURS = {
    'ponedeljak': [11, 17],
    'utorak': [11, 17],
    'sreda': [11, 17],
    'četvrtak': [11, 17],
    'petak': [11, 17],
    'subota': null,
    'nedelja': null,
};


function createContactInformation() {
    const contactContainer = createElement('div', ['contact-information']); 

    const addressInformation = createAddressInformation('Branimira Ćosića 15, Novi Sad');
    contactContainer.appendChild(addressInformation);

    const phoneInformation = createPhoneInformation('063 7062019');
    contactContainer.appendChild(phoneInformation);

    const businessHoursInformation = createBusinessHoursInformation();
    contactContainer.appendChild(businessHoursInformation);

    const emailInformation = createEmailInformation('lapetitecuisine.ns@gmail.com');
    contactContainer.appendChild(emailInformation);

    const facebookInformation = createFacebookInformation('https://www.facebook.com/francuskakuhinjica.ns/', '@francuskakuhinjica.ns');
    contactContainer.appendChild(facebookInformation);

    const instagramInformation = createInstagramInformation('https://www.instagram.com/francuskakuhinjica.ns/', '@francuskakuhinjica.ns');
    contactContainer.appendChild(instagramInformation);

    return contactContainer;
}

function createElement(tagName, classList = null, content = null, safe = false) {
    const element = document.createElement(tagName);
    if (classList) {
        element.classList.add(...classList);
    }
    if (content) {
        if (safe) {
            element.innerHTML = content;
        } else {
            element.textContent = content;
        }
    }
    return element;
}

function capitalize(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function createAddressInformation(businessLocation) {
    const addressContainer = createElement('div', ['information', 'address']);

    const icon = createElement('span', ['icon'], '<i class="fas fa-map-marked-alt fa-fw">', true);
    addressContainer.appendChild(icon);

    const address = createElement('span', ['text'], businessLocation);
    addressContainer.appendChild(address);

    return addressContainer;
}

function createPhoneInformation(phoneNumber) {
    const phoneContainer = createElement('div', ['information', 'phone']);

    const icon = createElement('span', ['icon'], '<i class="fas fa-phone-alt fa-fw"></i>', true);
    phoneContainer.appendChild(icon);

    const phone = createElement('span', ['text'], `<a href="tel:${phoneNumber}">${phoneNumber}</a>`, true); 
    phoneContainer.appendChild(phone);

    return phoneContainer;
}

function createBusinessHoursInformation() {
    const businessHoursContainer = createElement('div', ['information', 'business-hours']);

    const icon = createElement('span', ['icon'], '<i class="fas fa-business-time fa-fw">', true);
    businessHoursContainer.appendChild(icon);

    const helperDiv = createElement('div'); 

    const [currentDayName, currentHours] = getCurrentDayAndHours();

    const businessStatus = createElement(
        'p',
        ['text'],
        `Trenutno je <strong>${isBusinessOpen(currentDayName, currentHours) ? 'otvoreno' : 'zatvoreno'}</strong>.`,
        true
    ); 
    helperDiv.appendChild(businessStatus);

    const days = createElement('ul', ['days']);
    for (const dayName in BUSINESS_HOURS) {
        const day = createElement('li', ['day'], `<span class="day-name">${capitalize(dayName)}</span>`, true);
        if (dayName === currentDayName) {
            day.classList.add('active');
        }
        const workingHours = createElement(
            'span', 
            ['working-hours'],
            BUSINESS_HOURS[dayName] ? formatWorkingHoursRange(BUSINESS_HOURS[dayName]) : 'Zatvoreno',
            true
        )
        day.appendChild(workingHours);
        days.appendChild(day);
    }
    helperDiv.appendChild(days);
    businessHoursContainer.appendChild(helperDiv);

    return businessHoursContainer;
}

function getCurrentDayAndHours() {
    const date = new Date();
    const dayName = new Intl.DateTimeFormat('sr-Latn-RS', { weekday: 'long'}).format(date).toLowerCase();
    return [dayName, date.getHours()];
}

function isBusinessOpen(dayName, hours) {
    const workingHoursRange = BUSINESS_HOURS[dayName];
    return workingHoursRange[0] <= hours && workingHoursRange[1] >= hours;
}

function formatWorkingHoursRange(workingHoursRange) {
    return `${workingHoursRange[0]}:00 &ndash; ${workingHoursRange[1]}:00`
}

function createEmailInformation(emailAddress) {
    const emailContainer = createElement('div', ['information', 'email']);

    const icon = createElement('span', ['icon'], '<i class="fas fa-envelope fa-fw"></i>', true);
    emailContainer.appendChild(icon);

    const email = createElement('span', ['text'], `<a href="mailto:${emailAddress}">${emailAddress}</a>`, true); 
    emailContainer.appendChild(email);

    return emailContainer;
}

function createFacebookInformation(facebookAddress, handle) {
    const facebookContainer = createElement('div', ['information', 'facebook']);

    const icon = createElement('span', ['icon'], '<i class="fab fa-facebook fa-fw"></i>', true);
    facebookContainer.appendChild(icon);

    const facebook = createElement('span', ['text'], `<a href="${facebookAddress}">${handle}</a>`, true); 
    facebookContainer.appendChild(facebook);

    return facebookContainer;
}

function createInstagramInformation(instagramAddress, handle) {
    const instagramContainer = createElement('div', ['information', 'instagram']);

    const icon = createElement('span', ['icon'], '<i class="fab fa-instagram fa-fw"></i>', true);
    instagramContainer.appendChild(icon);

    const instagram = createElement('span', ['text'], `<a href="${instagramAddress}">${handle}</a>`, true); 
    instagramContainer.appendChild(instagram);

    return instagramContainer;
}

function createMap() {
    const map = createElement('div', ['map']);

    const iframe = createElement('iframe');
    iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2808.6080356307707!2d19.830706875146827!3d45.25571835023952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64c49d05c05e617b!2sLa%20Petite%20Cuisine!5e0!3m2!1sen!2srs!4v1639509160127!5m2!1sen!2srs');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('loading', 'lazy');
    map.appendChild(iframe);

    return map;
}

function loadContactContent(contentContainer) {
    const contactInformation = createContactInformation();
    contentContainer.appendChild(contactInformation);

    const map = createMap();
    contentContainer.appendChild(map);
}

export default loadContactContent;
