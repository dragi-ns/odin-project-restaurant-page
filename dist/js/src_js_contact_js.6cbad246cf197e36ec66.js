"use strict";
(self["webpackChunkodin_project_restaurant_page"] = self["webpackChunkodin_project_restaurant_page"] || []).push([["src_js_contact_js"],{

/***/ "./src/css/contact.css":
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/contact.css */ "./src/css/contact.css");
/* harmony import */ var _data_business_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/business.json */ "./src/data/business.json");
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/utils.js */ "./src/js/utils.js");




function createContactInformation() {
    const contactContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
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
    const addressContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div', 
        classList: ['information', 'address']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span', 
        classList: ['icon'], 
        content: '<i class="fas fa-map-marked-alt fa-fw">',
        useInnerHTML: true
    });
    addressContainer.appendChild(icon);

    const address = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        clasList: ['text'],
        content: _data_business_json__WEBPACK_IMPORTED_MODULE_1__.address
    });
    addressContainer.appendChild(address);

    return addressContainer;
}

function createPhoneInformation() {
    const phoneContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div',
        classList: ['information', 'phone']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-phone-alt fa-fw"></i>',
        useInnerHTML: true
    });
    phoneContainer.appendChild(icon);

    const phone = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="tel:${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.phone}">${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.phone}</a>`,
        useInnerHTML: true
    }); 
    phoneContainer.appendChild(phone);

    return phoneContainer;
}

function createBusinessHoursInformation() {
    const businessHoursContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div',
        classList: ['information', 'business-hours']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-business-time fa-fw">',
        useInnerHTML: true
    });
    businessHoursContainer.appendChild(icon);

    const helperDiv = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div'
    }); 

    const [currentDayName, currentHours] = getCurrentDayAndHours();

    const businessStatus = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'p',
        classList: ['text'],
        content: formatBusinessStatus(currentDayName, currentHours),
        useInnerHTML: true
    }); 
    helperDiv.appendChild(businessStatus);

    const days = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'ul',
        classList: ['days']
    });
    for (const dayName in _data_business_json__WEBPACK_IMPORTED_MODULE_1__.hours) {
        const day = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
            tagName: 'li',
            classList: ['day'],
            content: `<span class="day-name">${(0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.capitalize)(dayName)}</span>`,
            useInnerHTML: true
        });
        if (dayName === currentDayName) {
            day.classList.add('active');
        }
        const workingHours = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
            tagName: 'span', 
            classList: ['working-hours'],
            content: _data_business_json__WEBPACK_IMPORTED_MODULE_1__.hours[dayName] ? formatWorkingHoursRange(_data_business_json__WEBPACK_IMPORTED_MODULE_1__.hours[dayName]) : 'Zatvoreno',
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
    const workingHoursRange = _data_business_json__WEBPACK_IMPORTED_MODULE_1__.hours[dayName];

    if (workingHoursRange[0] - hours === 1) {
        return 'Uskoro se otvara.';
    }

    if (workingHoursRange[1] - hours === 1) {
        return 'Uskoro se zatvara.';
    }

    return `Trenutno je ${isBusinessOpen(dayName, hours) ? 'otvoreno' : 'zatvoreno'}.`;
}

function isBusinessOpen(dayName, hours) {
    const workingHoursRange = _data_business_json__WEBPACK_IMPORTED_MODULE_1__.hours[dayName];
    return workingHoursRange[0] <= hours && workingHoursRange[1] > hours;
}

function createEmailInformation() {
    const emailContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div',
        classList: ['information', 'email']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-envelope fa-fw"></i>',
        useInnerHTML: true
    });
    emailContainer.appendChild(icon);

    const email = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="mailto:${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.email}">${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.email}</a>`,
        useInnerHTML: true
    }); 
    emailContainer.appendChild(email);

    return emailContainer;
}

function createFacebookInformation() {
    const facebookContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div',
        classList: ['information', 'facebook']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fab fa-facebook fa-fw"></i>',
        useInnerHTML: true
    });
    facebookContainer.appendChild(icon);

    const facebook = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="https://facebook.com/${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.facebook}/" target="_blank">@${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.facebook}</a>`,
        useInnerHTML: true
    });
    facebookContainer.appendChild(facebook);

    return facebookContainer;
}

function createInstagramInformation() {
    const instagramContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div',
        classList: ['information', 'instagram']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fab fa-instagram fa-fw"></i>',
        useInnerHTML: true
    });
    instagramContainer.appendChild(icon);

    const instagram = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="https://instagram.com/${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.instagram}/" target="_blank">@${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.instagram}</a>`,
        useInnerHTML: true
    }); 
    instagramContainer.appendChild(instagram);

    return instagramContainer;
}

function createMap() {
    const map = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div',
        classList: ['map']
    });

    const iframe = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'iframe',
        attributes: {
            src: _data_business_json__WEBPACK_IMPORTED_MODULE_1__.mapSource,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactContent);


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function capitalize(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function createElement({ tagName, classList = null, attributes = null, content = null, useInnerHTML = false }) {
    if (!tagName) {
        throw new Error('tagName is required!');
    }

    const element = document.createElement(tagName);
    if (classList) {
        element.classList.add(...classList);
    }
    if (attributes) {
        for (const attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }

    if (content) {
        if (useInnerHTML) {
            element.innerHTML = content;
        } else {
            element.textContent = content;
        }
    }
    return element;
}




/***/ }),

/***/ "./src/data/business.json":
/*!********************************!*\
  !*** ./src/data/business.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"La Petite Cuisine","description":"Restorančić inspirisan francuskom kuhinjom. Uz nekoliko jela u stalnoj ponudi, svakodnevno menjamo meni (mesni i posni/veganski). Domaća atmosfera upotpunjena ukusnom i svežom hranom.","address":"Branimira Ćosića 15, Novi Sad","phone":"063 7062019","email":"lapetitecuisine.ns@gmail.com","facebook":"francuskakuhinjica.ns","instagram":"francuskakuhinjica.ns","mapSource":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2808.6080356307707!2d19.830706875146827!3d45.25571835023952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64c49d05c05e617b!2sLa%20Petite%20Cuisine!5e0!3m2!1sen!2srs!4v1639509160127!5m2!1sen!2srs","hours":{"ponedeljak":[11,17],"utorak":[11,17],"sreda":[11,17],"četvrtak":[11,17],"petak":[11,17],"subota":null,"nedelja":null}}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX2pzX2NvbnRhY3RfanMuNmNiYWQyNDZjZjE5N2UzNmVjNjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDc0I7QUFDUzs7QUFFM0Q7QUFDQSw2QkFBNkIsMkRBQWE7QUFDMUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QiwyREFBYTtBQUMxQztBQUNBO0FBQ0EsS0FBSzs7QUFFTCxpQkFBaUIsMkRBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsb0JBQW9CLDJEQUFhO0FBQ2pDO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQXFCO0FBQ3RDLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDJEQUFhO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlCQUFpQiwyREFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQkFBa0IsMkRBQWE7QUFDL0I7QUFDQTtBQUNBLGlDQUFpQyxzREFBbUIsQ0FBQyxJQUFJLHNEQUFtQixDQUFDO0FBQzdFO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsMkRBQWE7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUJBQWlCLDJEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLHNCQUFzQiwyREFBYTtBQUNuQztBQUNBLEtBQUs7O0FBRUw7O0FBRUEsMkJBQTJCLDJEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlCQUFpQiwyREFBYTtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMLDBCQUEwQixzREFBbUI7QUFDN0Msb0JBQW9CLDJEQUFhO0FBQ2pDO0FBQ0E7QUFDQSwrQ0FBK0Msd0RBQVUsVUFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQWE7QUFDMUM7QUFDQTtBQUNBLHFCQUFxQixzREFBbUIsb0NBQW9DLHNEQUFtQjtBQUMvRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQTs7QUFFQTtBQUNBLGNBQWMscUJBQXFCLFlBQVksRUFBRSxxQkFBcUI7QUFDdEU7O0FBRUE7QUFDQSw4QkFBOEIsc0RBQW1COztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwwREFBMEQ7QUFDcEY7O0FBRUE7QUFDQSw4QkFBOEIsc0RBQW1CO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsMkRBQWE7QUFDeEM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUJBQWlCLDJEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGtCQUFrQiwyREFBYTtBQUMvQjtBQUNBO0FBQ0Esb0NBQW9DLHNEQUFtQixDQUFDLElBQUksc0RBQW1CLENBQUM7QUFDaEY7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QiwyREFBYTtBQUMzQztBQUNBO0FBQ0EsS0FBSzs7QUFFTCxpQkFBaUIsMkRBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEscUJBQXFCLDJEQUFhO0FBQ2xDO0FBQ0E7QUFDQSxrREFBa0QseURBQXNCLENBQUMsc0JBQXNCLHlEQUFzQixDQUFDO0FBQ3RIO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsMkRBQWE7QUFDNUM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUJBQWlCLDJEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLHNCQUFzQiwyREFBYTtBQUNuQztBQUNBO0FBQ0EsbURBQW1ELDBEQUF1QixDQUFDLHNCQUFzQiwwREFBdUIsQ0FBQztBQUN6SDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDJEQUFhO0FBQzdCO0FBQ0E7QUFDQSxLQUFLOztBQUVMLG1CQUFtQiwyREFBYTtBQUNoQztBQUNBO0FBQ0EsaUJBQWlCLDBEQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNVFsQztBQUNBLGNBQWMsd0JBQXdCLEVBQUUsZ0JBQWdCO0FBQ3hEOztBQUVBLHlCQUF5QixvRkFBb0Y7QUFDN0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9jb250YWN0LmNzcz8zOGU5Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi4vY3NzL2NvbnRhY3QuY3NzJztcbmltcG9ydCBCVVNJTkVTU19EQVRBIGZyb20gJy4uL2RhdGEvYnVzaW5lc3MuanNvbic7XG5pbXBvcnQgeyBjYXBpdGFsaXplLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vanMvdXRpbHMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2NvbnRhY3QtaW5mb3JtYXRpb24nXVxuICAgIH0pOyBcblxuICAgIGNvbnN0IGFkZHJlc3NJbmZvcm1hdGlvbiA9IGNyZWF0ZUFkZHJlc3NJbmZvcm1hdGlvbigpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0luZm9ybWF0aW9uKTtcblxuICAgIGNvbnN0IHBob25lSW5mb3JtYXRpb24gPSBjcmVhdGVQaG9uZUluZm9ybWF0aW9uKCk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZUluZm9ybWF0aW9uKTtcblxuICAgIGNvbnN0IGJ1c2luZXNzSG91cnNJbmZvcm1hdGlvbiA9IGNyZWF0ZUJ1c2luZXNzSG91cnNJbmZvcm1hdGlvbigpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVzaW5lc3NIb3Vyc0luZm9ybWF0aW9uKTtcblxuICAgIGNvbnN0IGVtYWlsSW5mb3JtYXRpb24gPSBjcmVhdGVFbWFpbEluZm9ybWF0aW9uKCk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbEluZm9ybWF0aW9uKTtcblxuICAgIGNvbnN0IGZhY2Vib29rSW5mb3JtYXRpb24gPSBjcmVhdGVGYWNlYm9va0luZm9ybWF0aW9uKCk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChmYWNlYm9va0luZm9ybWF0aW9uKTtcblxuICAgIGNvbnN0IGluc3RhZ3JhbUluZm9ybWF0aW9uID0gY3JlYXRlSW5zdGFncmFtSW5mb3JtYXRpb24oKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RhZ3JhbUluZm9ybWF0aW9uKTtcblxuICAgIHJldHVybiBjb250YWN0Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRyZXNzSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnZGl2JywgXG4gICAgICAgIGNsYXNzTGlzdDogWydpbmZvcm1hdGlvbicsICdhZGRyZXNzJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLCBcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2ljb24nXSwgXG4gICAgICAgIGNvbnRlbnQ6ICc8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VkLWFsdCBmYS1md1wiPicsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc0xpc3Q6IFsndGV4dCddLFxuICAgICAgICBjb250ZW50OiBCVVNJTkVTU19EQVRBLmFkZHJlc3NcbiAgICB9KTtcbiAgICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgcmV0dXJuIGFkZHJlc3NDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgcGhvbmVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTGlzdDogWydpbmZvcm1hdGlvbicsICdwaG9uZSddXG4gICAgfSk7XG5cbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2ljb24nXSxcbiAgICAgICAgY29udGVudDogJzxpIGNsYXNzPVwiZmFzIGZhLXBob25lLWFsdCBmYS1md1wiPjwvaT4nLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTtcbiAgICBwaG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IHBob25lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ3RleHQnXSxcbiAgICAgICAgY29udGVudDogYDxhIGhyZWY9XCJ0ZWw6JHtCVVNJTkVTU19EQVRBLnBob25lfVwiPiR7QlVTSU5FU1NfREFUQS5waG9uZX08L2E+YCxcbiAgICAgICAgdXNlSW5uZXJIVE1MOiB0cnVlXG4gICAgfSk7IFxuICAgIHBob25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIHJldHVybiBwaG9uZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVzaW5lc3NIb3Vyc0luZm9ybWF0aW9uKCkge1xuICAgIGNvbnN0IGJ1c2luZXNzSG91cnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTGlzdDogWydpbmZvcm1hdGlvbicsICdidXNpbmVzcy1ob3VycyddXG4gICAgfSk7XG5cbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2ljb24nXSxcbiAgICAgICAgY29udGVudDogJzxpIGNsYXNzPVwiZmFzIGZhLWJ1c2luZXNzLXRpbWUgZmEtZndcIj4nLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTtcbiAgICBidXNpbmVzc0hvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgY29uc3QgaGVscGVyRGl2ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnXG4gICAgfSk7IFxuXG4gICAgY29uc3QgW2N1cnJlbnREYXlOYW1lLCBjdXJyZW50SG91cnNdID0gZ2V0Q3VycmVudERheUFuZEhvdXJzKCk7XG5cbiAgICBjb25zdCBidXNpbmVzc1N0YXR1cyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgIGNsYXNzTGlzdDogWyd0ZXh0J10sXG4gICAgICAgIGNvbnRlbnQ6IGZvcm1hdEJ1c2luZXNzU3RhdHVzKGN1cnJlbnREYXlOYW1lLCBjdXJyZW50SG91cnMpLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTsgXG4gICAgaGVscGVyRGl2LmFwcGVuZENoaWxkKGJ1c2luZXNzU3RhdHVzKTtcblxuICAgIGNvbnN0IGRheXMgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3VsJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2RheXMnXVxuICAgIH0pO1xuICAgIGZvciAoY29uc3QgZGF5TmFtZSBpbiBCVVNJTkVTU19EQVRBLmhvdXJzKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnTmFtZTogJ2xpJyxcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydkYXknXSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGA8c3BhbiBjbGFzcz1cImRheS1uYW1lXCI+JHtjYXBpdGFsaXplKGRheU5hbWUpfTwvc3Bhbj5gLFxuICAgICAgICAgICAgdXNlSW5uZXJIVE1MOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGF5TmFtZSA9PT0gY3VycmVudERheU5hbWUpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3b3JraW5nSG91cnMgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdzcGFuJywgXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnd29ya2luZy1ob3VycyddLFxuICAgICAgICAgICAgY29udGVudDogQlVTSU5FU1NfREFUQS5ob3Vyc1tkYXlOYW1lXSA/IGZvcm1hdFdvcmtpbmdIb3Vyc1JhbmdlKEJVU0lORVNTX0RBVEEuaG91cnNbZGF5TmFtZV0pIDogJ1phdHZvcmVubycsXG4gICAgICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZCh3b3JraW5nSG91cnMpO1xuICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGRheSk7XG4gICAgfVxuICAgIGhlbHBlckRpdi5hcHBlbmRDaGlsZChkYXlzKTtcbiAgICBidXNpbmVzc0hvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlbHBlckRpdik7XG5cbiAgICByZXR1cm4gYnVzaW5lc3NIb3Vyc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERheUFuZEhvdXJzKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheU5hbWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnc3ItTGF0bi1SUycsIHsgd2Vla2RheTogJ2xvbmcnfSkuZm9ybWF0KGRhdGUpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIFtkYXlOYW1lLCBkYXRlLmdldEhvdXJzKCldO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXb3JraW5nSG91cnNSYW5nZSh3b3JraW5nSG91cnNSYW5nZSkge1xuICAgIHJldHVybiBgJHt3b3JraW5nSG91cnNSYW5nZVswXX06MDAgJm5kYXNoOyAke3dvcmtpbmdIb3Vyc1JhbmdlWzFdfTowMGBcbn1cblxuZnVuY3Rpb24gZm9ybWF0QnVzaW5lc3NTdGF0dXMoZGF5TmFtZSwgaG91cnMpIHtcbiAgICBjb25zdCB3b3JraW5nSG91cnNSYW5nZSA9IEJVU0lORVNTX0RBVEEuaG91cnNbZGF5TmFtZV07XG5cbiAgICBpZiAod29ya2luZ0hvdXJzUmFuZ2VbMF0gLSBob3VycyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gJ1Vza29ybyBzZSBvdHZhcmEuJztcbiAgICB9XG5cbiAgICBpZiAod29ya2luZ0hvdXJzUmFuZ2VbMV0gLSBob3VycyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gJ1Vza29ybyBzZSB6YXR2YXJhLic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBUcmVudXRubyBqZSAke2lzQnVzaW5lc3NPcGVuKGRheU5hbWUsIGhvdXJzKSA/ICdvdHZvcmVubycgOiAnemF0dm9yZW5vJ30uYDtcbn1cblxuZnVuY3Rpb24gaXNCdXNpbmVzc09wZW4oZGF5TmFtZSwgaG91cnMpIHtcbiAgICBjb25zdCB3b3JraW5nSG91cnNSYW5nZSA9IEJVU0lORVNTX0RBVEEuaG91cnNbZGF5TmFtZV07XG4gICAgcmV0dXJuIHdvcmtpbmdIb3Vyc1JhbmdlWzBdIDw9IGhvdXJzICYmIHdvcmtpbmdIb3Vyc1JhbmdlWzFdID4gaG91cnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgZW1haWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTGlzdDogWydpbmZvcm1hdGlvbicsICdlbWFpbCddXG4gICAgfSk7XG5cbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2ljb24nXSxcbiAgICAgICAgY29udGVudDogJzxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlIGZhLWZ3XCI+PC9pPicsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsndGV4dCddLFxuICAgICAgICBjb250ZW50OiBgPGEgaHJlZj1cIm1haWx0bzoke0JVU0lORVNTX0RBVEEuZW1haWx9XCI+JHtCVVNJTkVTU19EQVRBLmVtYWlsfTwvYT5gLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTsgXG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgcmV0dXJuIGVtYWlsQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGYWNlYm9va0luZm9ybWF0aW9uKCkge1xuICAgIGNvbnN0IGZhY2Vib29rQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaW5mb3JtYXRpb24nLCAnZmFjZWJvb2snXVxuICAgIH0pO1xuXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIGNsYXNzTGlzdDogWydpY29uJ10sXG4gICAgICAgIGNvbnRlbnQ6ICc8aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vayBmYS1md1wiPjwvaT4nLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTtcbiAgICBmYWNlYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IGZhY2Vib29rID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ3RleHQnXSxcbiAgICAgICAgY29udGVudDogYDxhIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmNvbS8ke0JVU0lORVNTX0RBVEEuZmFjZWJvb2t9L1wiIHRhcmdldD1cIl9ibGFua1wiPkAke0JVU0lORVNTX0RBVEEuZmFjZWJvb2t9PC9hPmAsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGZhY2Vib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhY2Vib29rKTtcblxuICAgIHJldHVybiBmYWNlYm9va0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFncmFtSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgaW5zdGFncmFtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaW5mb3JtYXRpb24nLCAnaW5zdGFncmFtJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaWNvbiddLFxuICAgICAgICBjb250ZW50OiAnPGkgY2xhc3M9XCJmYWIgZmEtaW5zdGFncmFtIGZhLWZ3XCI+PC9pPicsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGluc3RhZ3JhbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IGluc3RhZ3JhbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIGNsYXNzTGlzdDogWyd0ZXh0J10sXG4gICAgICAgIGNvbnRlbnQ6IGA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tLyR7QlVTSU5FU1NfREFUQS5pbnN0YWdyYW19L1wiIHRhcmdldD1cIl9ibGFua1wiPkAke0JVU0lORVNTX0RBVEEuaW5zdGFncmFtfTwvYT5gLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTsgXG4gICAgaW5zdGFncmFtQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RhZ3JhbSk7XG5cbiAgICByZXR1cm4gaW5zdGFncmFtQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXAoKSB7XG4gICAgY29uc3QgbWFwID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnbWFwJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IGlmcmFtZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnaWZyYW1lJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgc3JjOiBCVVNJTkVTU19EQVRBLm1hcFNvdXJjZSxcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5J1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbWFwLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgICByZXR1cm4gbWFwO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdENvbnRlbnQoY29udGVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvbnRhY3RJbmZvcm1hdGlvbiA9IGNyZWF0ZUNvbnRhY3RJbmZvcm1hdGlvbigpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9ybWF0aW9uKTtcblxuICAgIGNvbnN0IG1hcCA9IGNyZWF0ZU1hcCgpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RDb250ZW50O1xuIiwiZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7c3RyaW5nWzBdLnRvVXBwZXJDYXNlKCl9JHtzdHJpbmcuc2xpY2UoMSl9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWUsIGNsYXNzTGlzdCA9IG51bGwsIGF0dHJpYnV0ZXMgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgdXNlSW5uZXJIVE1MID0gZmFsc2UgfSkge1xuICAgIGlmICghdGFnTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhZ05hbWUgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHVzZUlubmVySFRNTCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGNhcGl0YWxpemUsIGNyZWF0ZUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==