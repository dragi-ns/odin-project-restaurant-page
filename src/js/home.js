import '../css/home.css';
import illustration from '../images/home-illustration.svg';

function createRestaurantIllustration() {
    const restaurantIllustration = document.createElement('div');
    restaurantIllustration.classList.add('restaurant-illustration');
    restaurantIllustration.innerHTML = illustration;
    return restaurantIllustration;
}

function createRestaurantDescription() {
    const restaurantDescriptionContainer = document.createElement('div');
    restaurantDescriptionContainer.classList.add('restaurant-description');

    const description = document.createElement('p');
    description.textContent = 'Restorančić inspirisan francuskom kuhinjom. Uz nekoliko jela u stalnoj ponudi, svakodnevno menjamo meni (mesni i posni/veganski). Domaca atmosfera upotpunjena ukusnom i svezom hranom.';
    restaurantDescriptionContainer.appendChild(description);

    const callToAction = document.createElement('a');
    callToAction.classList.add('btn', 'call-to-action');
    callToAction.href = 'tel:0637062019';

    const callToActionIcon = document.createElement('span');
    callToActionIcon.innerHTML = '<i class="fas fa-phone-alt"></i>';
    callToAction.appendChild(callToActionIcon);

    const callToActionText = document.createElement('span');
    callToActionText.textContent = 'Pozovite nas';
    callToAction.appendChild(callToActionText);
    restaurantDescriptionContainer.appendChild(callToAction);

    return restaurantDescriptionContainer;
}

function loadHomeContent(contentContainer) {
    contentContainer.appendChild(createRestaurantIllustration());
    contentContainer.appendChild(createRestaurantDescription())
}

export default loadHomeContent;
