import '../css/home.css';
import ILLUSTRATION from '../images/home-illustration.svg';
import BUSINESS_DATA from '../data/business.json';
import { createElement } from '../js/utils.js';

function createRestaurantIllustration() {
    const restaurantIllustrationContainer = createElement({
        tagName: 'div',
        classList: ['restaurant-illustration'],
        content: ILLUSTRATION,
        useInnerHTML: true
    });
    return restaurantIllustrationContainer;
}

function createRestaurantDescription() {
    const restaurantDescriptionContainer = createElement({
        tagName: 'div',
        classList: ['restaurant-description']
    });

    const description = createElement({
        tagName: 'p',
        content: BUSINESS_DATA.description
    });
    restaurantDescriptionContainer.appendChild(description);

    const callToAction = createElement({
        tagName: 'a',
        classList: ['btn', 'call-to-action'],
        attributes: {
            href: `tel:${BUSINESS_DATA.phone}`
        }
    });

    const callToActionIcon = createElement({
        tagName: 'span',
        content: '<i class="fas fa-phone-alt"></i>',
        useInnerHTML: true
    });
    callToAction.appendChild(callToActionIcon);

    const callToActionText = createElement({
        tagName: 'span',
        content: 'Pozovite nas'
    });
    callToAction.appendChild(callToActionText);
    restaurantDescriptionContainer.appendChild(callToAction);

    return restaurantDescriptionContainer;
}

function loadHomeContent(contentContainer) {
    contentContainer.appendChild(createRestaurantIllustration());
    contentContainer.appendChild(createRestaurantDescription())
}

export default loadHomeContent;
