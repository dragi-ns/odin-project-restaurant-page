import '../css/home.css';
import illustration from '../images/home-illustration.svg';

function restaurantIllustration() {
    const container = document.createElement('div');
    container.classList.add('restaurant-illustration');
    container.innerHTML = illustration;
    return container;
}

function restaurantDescription() {
    const container = document.createElement('div');
    container.classList.add('restaurant-description');

    const description = document.createElement('p');
    description.textContent = 'Restorančić inspirisan francuskom kuhinjom. Čuveni potaž, baget, mirisna peciva, sendviči, omleti. Stalna ponuda nekoliko tipičnih francuskih jela, dnevni meniji u mesnoj i biljnoj verziji, palačinke...';
    container.appendChild(description);

    const callToAction = document.createElement('a');
    callToAction.classList.add('btn', 'call-to-action');
    callToAction.href = 'tel:0637062019';

    const callToActionIcon = document.createElement('span');
    callToActionIcon.innerHTML = '<i class="fas fa-phone-alt"></i>';
    callToAction.appendChild(callToActionIcon);

    const callToActionText = document.createElement('span');
    callToActionText.textContent = 'Pozovite nas';
    callToAction.appendChild(callToActionText);
    container.appendChild(callToAction);

    return container;
}

export default [restaurantIllustration(), restaurantDescription()];
