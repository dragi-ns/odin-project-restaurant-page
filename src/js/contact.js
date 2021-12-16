import '../css/contact.css';
import BUSINESS_DATA from '../data/business.json';
import { capitalize, createElement } from '../js/utils.js';

function createContactInformation() {
    const contactContainer = createElement({
        tagName: 'div',
        classList: ['contact-information']
    }); 

    const addressInformation = createAddressInformation();
    contactContainer.appendChild(addressInformation);

    const phoneInformation = createPhoneInformation();
    contactContainer.appendChild(phoneInformation);

    const businessHoursInformation = createBusinessHoursInformation();
    contactContainer.appendChild(businessHoursInformation);

    const emailInformation = createEmailInformation();
    contactContainer.appendChild(emailInformation);

    const facebookInformation = createFacebookInformation();
    contactContainer.appendChild(facebookInformation);

    const instagramInformation = createInstagramInformation();
    contactContainer.appendChild(instagramInformation);

    return contactContainer;
}

function createAddressInformation() {
    const addressContainer = createElement({
        tagName: 'div', 
        classList: ['information', 'address']
    });

    const icon = createElement({
        tagName: 'span', 
        classList: ['icon'], 
        content: '<i class="fas fa-map-marked-alt fa-fw">',
        useInnerHTML: true
    });
    addressContainer.appendChild(icon);

    const address = createElement({
        tagName: 'span',
        clasList: ['text'],
        content: BUSINESS_DATA.address
    });
    addressContainer.appendChild(address);

    return addressContainer;
}

function createPhoneInformation() {
    const phoneContainer = createElement({
        tagName: 'div',
        classList: ['information', 'phone']
    });

    const icon = createElement({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-phone-alt fa-fw"></i>',
        useInnerHTML: true
    });
    phoneContainer.appendChild(icon);

    const phone = createElement({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="tel:${BUSINESS_DATA.phone}">${BUSINESS_DATA.phone}</a>`,
        useInnerHTML: true
    }); 
    phoneContainer.appendChild(phone);

    return phoneContainer;
}

function createBusinessHoursInformation() {
    const businessHoursContainer = createElement({
        tagName: 'div',
        classList: ['information', 'business-hours']
    });

    const icon = createElement({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-business-time fa-fw">',
        useInnerHTML: true
    });
    businessHoursContainer.appendChild(icon);

    const helperDiv = createElement({
        tagName: 'div'
    }); 

    const [currentDayName, currentHours] = getCurrentDayAndHours();

    const businessStatus = createElement({
        tagName: 'p',
        classList: ['text'],
        content: formatBusinessStatus(currentDayName, currentHours),
        useInnerHTML: true
    }); 
    helperDiv.appendChild(businessStatus);

    const days = createElement({
        tagName: 'ul',
        classList: ['days']
    });
    for (const dayName in BUSINESS_DATA.hours) {
        const day = createElement({
            tagName: 'li',
            classList: ['day'],
            content: `<span class="day-name">${capitalize(dayName)}</span>`,
            useInnerHTML: true
        });
        if (dayName === currentDayName) {
            day.classList.add('active');
        }
        const workingHours = createElement({
            tagName: 'span', 
            classList: ['working-hours'],
            content: BUSINESS_DATA.hours[dayName] ? formatWorkingHoursRange(BUSINESS_DATA.hours[dayName]) : 'Zatvoreno',
            useInnerHTML: true
        });
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

function formatWorkingHoursRange(workingHoursRange) {
    return `${workingHoursRange[0]}:00 &ndash; ${workingHoursRange[1]}:00`
}

function formatBusinessStatus(dayName, hours) {
    const workingHoursRange = BUSINESS_DATA.hours[dayName];

    if (workingHoursRange[0] - hours === 1) {
        return 'Uskoro se otvara.';
    }

    if (workingHoursRange[1] - hours === 1) {
        return 'Uskoro se zatvara.';
    }

    return `Trenutno je ${isBusinessOpen(dayName, hours) ? 'otvoreno' : 'zatvoreno'}.`;
}

function isBusinessOpen(dayName, hours) {
    const workingHoursRange = BUSINESS_DATA.hours[dayName];
    return workingHoursRange[0] <= hours && workingHoursRange[1] > hours;
}

function createEmailInformation() {
    const emailContainer = createElement({
        tagName: 'div',
        classList: ['information', 'email']
    });

    const icon = createElement({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-envelope fa-fw"></i>',
        useInnerHTML: true
    });
    emailContainer.appendChild(icon);

    const email = createElement({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="mailto:${BUSINESS_DATA.email}">${BUSINESS_DATA.email}</a>`,
        useInnerHTML: true
    }); 
    emailContainer.appendChild(email);

    return emailContainer;
}

function createFacebookInformation() {
    const facebookContainer = createElement({
        tagName: 'div',
        classList: ['information', 'facebook']
    });

    const icon = createElement({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fab fa-facebook fa-fw"></i>',
        useInnerHTML: true
    });
    facebookContainer.appendChild(icon);

    const facebook = createElement({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="https://facebook.com/${BUSINESS_DATA.facebook}/" target="_blank">@${BUSINESS_DATA.facebook}</a>`,
        useInnerHTML: true
    });
    facebookContainer.appendChild(facebook);

    return facebookContainer;
}

function createInstagramInformation() {
    const instagramContainer = createElement({
        tagName: 'div',
        classList: ['information', 'instagram']
    });

    const icon = createElement({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fab fa-instagram fa-fw"></i>',
        useInnerHTML: true
    });
    instagramContainer.appendChild(icon);

    const instagram = createElement({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="https://instagram.com/${BUSINESS_DATA.instagram}/" target="_blank">@${BUSINESS_DATA.instagram}</a>`,
        useInnerHTML: true
    }); 
    instagramContainer.appendChild(instagram);

    return instagramContainer;
}

function createMap() {
    const map = createElement({
        tagName: 'div',
        classList: ['map']
    });

    const iframe = createElement({
        tagName: 'iframe',
        attributes: {
            src: BUSINESS_DATA.mapSource,
            allowfullscreen: true,
            loading: 'lazy'
        }
    });
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
