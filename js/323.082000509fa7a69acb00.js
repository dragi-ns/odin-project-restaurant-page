"use strict";
(self["webpackChunkodin_project_restaurant_page"] = self["webpackChunkodin_project_restaurant_page"] || []).push([[323,658],{

/***/ 323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_business_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(658);




function createContactInformation() {
    const contactContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
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
    const addressContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div', 
        classList: ['information', 'address']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span', 
        classList: ['icon'], 
        content: '<i class="fas fa-map-marked-alt fa-fw">',
        useInnerHTML: true
    });
    addressContainer.appendChild(icon);

    const address = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        clasList: ['text'],
        content: _data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .address */ .Lk
    });
    addressContainer.appendChild(address);

    return addressContainer;
}

function createPhoneInformation() {
    const phoneContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        classList: ['information', 'phone']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-phone-alt fa-fw"></i>',
        useInnerHTML: true
    });
    phoneContainer.appendChild(icon);

    const phone = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="tel:${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .phone */ .m7}">${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .phone */ .m7}</a>`,
        useInnerHTML: true
    }); 
    phoneContainer.appendChild(phone);

    return phoneContainer;
}

function createBusinessHoursInformation() {
    const businessHoursContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        classList: ['information', 'business-hours']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-business-time fa-fw">',
        useInnerHTML: true
    });
    businessHoursContainer.appendChild(icon);

    const helperDiv = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div'
    }); 

    const [currentDayName, currentHours] = getCurrentDayAndHours();

    const businessStatus = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'p',
        classList: ['text'],
        content: formatBusinessStatus(currentDayName, currentHours),
        useInnerHTML: true
    }); 
    helperDiv.appendChild(businessStatus);

    const days = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'ul',
        classList: ['days']
    });
    for (const dayName in _data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .hours */ .i4) {
        const day = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tagName: 'li',
            classList: ['day'],
            content: `<span class="day-name">${(0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(dayName)}</span>`,
            useInnerHTML: true
        });
        if (dayName === currentDayName) {
            day.classList.add('active');
        }
        const workingHours = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tagName: 'span', 
            classList: ['working-hours'],
            content: _data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .hours */ .i4[dayName] ? formatWorkingHoursRange(_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .hours */ .i4[dayName]) : 'Zatvoreno',
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
    const workingHoursRange = _data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .hours */ .i4[dayName];
    if (workingHoursRange) {
        if (workingHoursRange[0] - hours === 1) {
            return 'Uskoro se otvara.';
        }

        if (workingHoursRange[1] - hours === 1) {
            return 'Uskoro se zatvara.';
        }
    }
    return `Trenutno je ${isBusinessOpen(dayName, hours) ? 'otvoreno' : 'zatvoreno'}.`;
}

function isBusinessOpen(dayName, hours) {
    const workingHoursRange = _data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .hours */ .i4[dayName];
    if (!workingHoursRange) {
        return false;
    }
    return workingHoursRange[0] <= hours && workingHoursRange[1] > hours;
}

function createEmailInformation() {
    const emailContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        classList: ['information', 'email']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fas fa-envelope fa-fw"></i>',
        useInnerHTML: true
    });
    emailContainer.appendChild(icon);

    const email = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="mailto:${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .email */ .Do}">${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .email */ .Do}</a>`,
        useInnerHTML: true
    }); 
    emailContainer.appendChild(email);

    return emailContainer;
}

function createFacebookInformation() {
    const facebookContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        classList: ['information', 'facebook']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fab fa-facebook fa-fw"></i>',
        useInnerHTML: true
    });
    facebookContainer.appendChild(icon);

    const facebook = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="https://facebook.com/${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .facebook */ .qv}/" target="_blank">@${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .facebook */ .qv}</a>`,
        useInnerHTML: true
    });
    facebookContainer.appendChild(facebook);

    return facebookContainer;
}

function createInstagramInformation() {
    const instagramContainer = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        classList: ['information', 'instagram']
    });

    const icon = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['icon'],
        content: '<i class="fab fa-instagram fa-fw"></i>',
        useInnerHTML: true
    });
    instagramContainer.appendChild(icon);

    const instagram = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'span',
        classList: ['text'],
        content: `<a href="https://instagram.com/${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .instagram */ .CR}/" target="_blank">@${_data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .instagram */ .CR}</a>`,
        useInnerHTML: true
    }); 
    instagramContainer.appendChild(instagram);

    return instagramContainer;
}

function createMap() {
    const map = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        classList: ['map']
    });

    const iframe = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'iframe',
        attributes: {
            src: _data_business_json__WEBPACK_IMPORTED_MODULE_0__/* .mapSource */ .nT,
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

/***/ 658:
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

/***/ 182:
/***/ ((module) => {

module.exports = JSON.parse('{"WL":"Restorančić inspirisan francuskom kuhinjom. Uz nekoliko jela u stalnoj ponudi, svakodnevno menjamo meni (mesni i posni/veganski). Domaća atmosfera upotpunjena ukusnom i svežom hranom.","Lk":"Branimira Ćosića 15, Novi Sad","m7":"063 7062019","Do":"lapetitecuisine.ns@gmail.com","qv":"francuskakuhinjica.ns","CR":"francuskakuhinjica.ns","nT":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2808.6080356307707!2d19.830706875146827!3d45.25571835023952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64c49d05c05e617b!2sLa%20Petite%20Cuisine!5e0!3m2!1sen!2srs!4v1639509160127!5m2!1sen!2srs","i4":{"ponedeljak":[11,17],"utorak":[11,17],"sreda":[11,17],"četvrtak":[11,17],"petak":[11,17],"subota":null,"nedelja":null}}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkRBQWE7QUFDbkM7QUFDQTtBQUNBLG1EQUFtRCxvRUFBdUIsQ0FBQyxzQkFBc0Isb0VBQXVCLENBQUM7QUFDekg7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwyREFBYTtBQUM3QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxtQkFBbUIsMkRBQWE7QUFDaEM7QUFDQTtBQUNBLGlCQUFpQixvRUFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQy9RbEM7QUFDQSxjQUFjLHdCQUF3QixFQUFFLGdCQUFnQjtBQUN4RDs7QUFFQSx5QkFBeUIsb0ZBQW9GO0FBQzdHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvY29udGFjdC5jc3MnO1xuaW1wb3J0IEJVU0lORVNTX0RBVEEgZnJvbSAnLi4vZGF0YS9idXNpbmVzcy5qc29uJztcbmltcG9ydCB7IGNhcGl0YWxpemUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9qcy91dGlscy5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbmZvcm1hdGlvbigpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnY29udGFjdC1pbmZvcm1hdGlvbiddXG4gICAgfSk7IFxuXG4gICAgY29uc3QgYWRkcmVzc0luZm9ybWF0aW9uID0gY3JlYXRlQWRkcmVzc0luZm9ybWF0aW9uKCk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSW5mb3JtYXRpb24pO1xuXG4gICAgY29uc3QgcGhvbmVJbmZvcm1hdGlvbiA9IGNyZWF0ZVBob25lSW5mb3JtYXRpb24oKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lSW5mb3JtYXRpb24pO1xuXG4gICAgY29uc3QgYnVzaW5lc3NIb3Vyc0luZm9ybWF0aW9uID0gY3JlYXRlQnVzaW5lc3NIb3Vyc0luZm9ybWF0aW9uKCk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChidXNpbmVzc0hvdXJzSW5mb3JtYXRpb24pO1xuXG4gICAgY29uc3QgZW1haWxJbmZvcm1hdGlvbiA9IGNyZWF0ZUVtYWlsSW5mb3JtYXRpb24oKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsSW5mb3JtYXRpb24pO1xuXG4gICAgY29uc3QgZmFjZWJvb2tJbmZvcm1hdGlvbiA9IGNyZWF0ZUZhY2Vib29rSW5mb3JtYXRpb24oKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhY2Vib29rSW5mb3JtYXRpb24pO1xuXG4gICAgY29uc3QgaW5zdGFncmFtSW5mb3JtYXRpb24gPSBjcmVhdGVJbnN0YWdyYW1JbmZvcm1hdGlvbigpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdGFncmFtSW5mb3JtYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZHJlc3NJbmZvcm1hdGlvbigpIHtcbiAgICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLCBcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2luZm9ybWF0aW9uJywgJ2FkZHJlc3MnXVxuICAgIH0pO1xuXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsIFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaWNvbiddLCBcbiAgICAgICAgY29udGVudDogJzxpIGNsYXNzPVwiZmFzIGZhLW1hcC1tYXJrZWQtYWx0IGZhLWZ3XCI+JyxcbiAgICAgICAgdXNlSW5uZXJIVE1MOiB0cnVlXG4gICAgfSk7XG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzTGlzdDogWyd0ZXh0J10sXG4gICAgICAgIGNvbnRlbnQ6IEJVU0lORVNTX0RBVEEuYWRkcmVzc1xuICAgIH0pO1xuICAgIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICByZXR1cm4gYWRkcmVzc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvbmVJbmZvcm1hdGlvbigpIHtcbiAgICBjb25zdCBwaG9uZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2luZm9ybWF0aW9uJywgJ3Bob25lJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaWNvbiddLFxuICAgICAgICBjb250ZW50OiAnPGkgY2xhc3M9XCJmYXMgZmEtcGhvbmUtYWx0IGZhLWZ3XCI+PC9pPicsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIHBob25lQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgY29uc3QgcGhvbmUgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsndGV4dCddLFxuICAgICAgICBjb250ZW50OiBgPGEgaHJlZj1cInRlbDoke0JVU0lORVNTX0RBVEEucGhvbmV9XCI+JHtCVVNJTkVTU19EQVRBLnBob25lfTwvYT5gLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTsgXG4gICAgcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gICAgcmV0dXJuIHBob25lQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXNpbmVzc0hvdXJzSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgYnVzaW5lc3NIb3Vyc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2luZm9ybWF0aW9uJywgJ2J1c2luZXNzLWhvdXJzJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaWNvbiddLFxuICAgICAgICBjb250ZW50OiAnPGkgY2xhc3M9XCJmYXMgZmEtYnVzaW5lc3MtdGltZSBmYS1md1wiPicsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGJ1c2luZXNzSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBjb25zdCBoZWxwZXJEaXYgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ2RpdidcbiAgICB9KTsgXG5cbiAgICBjb25zdCBbY3VycmVudERheU5hbWUsIGN1cnJlbnRIb3Vyc10gPSBnZXRDdXJyZW50RGF5QW5kSG91cnMoKTtcblxuICAgIGNvbnN0IGJ1c2luZXNzU3RhdHVzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ3RleHQnXSxcbiAgICAgICAgY29udGVudDogZm9ybWF0QnVzaW5lc3NTdGF0dXMoY3VycmVudERheU5hbWUsIGN1cnJlbnRIb3VycyksXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pOyBcbiAgICBoZWxwZXJEaXYuYXBwZW5kQ2hpbGQoYnVzaW5lc3NTdGF0dXMpO1xuXG4gICAgY29uc3QgZGF5cyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAndWwnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnZGF5cyddXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBkYXlOYW1lIGluIEJVU0lORVNTX0RBVEEuaG91cnMpIHtcbiAgICAgICAgY29uc3QgZGF5ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWdOYW1lOiAnbGknLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2RheSddLFxuICAgICAgICAgICAgY29udGVudDogYDxzcGFuIGNsYXNzPVwiZGF5LW5hbWVcIj4ke2NhcGl0YWxpemUoZGF5TmFtZSl9PC9zcGFuPmAsXG4gICAgICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkYXlOYW1lID09PSBjdXJyZW50RGF5TmFtZSkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdvcmtpbmdIb3VycyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnTmFtZTogJ3NwYW4nLCBcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWyd3b3JraW5nLWhvdXJzJ10sXG4gICAgICAgICAgICBjb250ZW50OiBCVVNJTkVTU19EQVRBLmhvdXJzW2RheU5hbWVdID8gZm9ybWF0V29ya2luZ0hvdXJzUmFuZ2UoQlVTSU5FU1NfREFUQS5ob3Vyc1tkYXlOYW1lXSkgOiAnWmF0dm9yZW5vJyxcbiAgICAgICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKHdvcmtpbmdIb3Vycyk7XG4gICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgICB9XG4gICAgaGVscGVyRGl2LmFwcGVuZENoaWxkKGRheXMpO1xuICAgIGJ1c2luZXNzSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVscGVyRGl2KTtcblxuICAgIHJldHVybiBidXNpbmVzc0hvdXJzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF5QW5kSG91cnMoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5TmFtZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdzci1MYXRuLVJTJywgeyB3ZWVrZGF5OiAnbG9uZyd9KS5mb3JtYXQoZGF0ZSkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gW2RheU5hbWUsIGRhdGUuZ2V0SG91cnMoKV07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdvcmtpbmdIb3Vyc1JhbmdlKHdvcmtpbmdIb3Vyc1JhbmdlKSB7XG4gICAgcmV0dXJuIGAke3dvcmtpbmdIb3Vyc1JhbmdlWzBdfTowMCAmbmRhc2g7ICR7d29ya2luZ0hvdXJzUmFuZ2VbMV19OjAwYFxufVxuXG5mdW5jdGlvbiBmb3JtYXRCdXNpbmVzc1N0YXR1cyhkYXlOYW1lLCBob3Vycykge1xuICAgIGNvbnN0IHdvcmtpbmdIb3Vyc1JhbmdlID0gQlVTSU5FU1NfREFUQS5ob3Vyc1tkYXlOYW1lXTtcbiAgICBpZiAod29ya2luZ0hvdXJzUmFuZ2UpIHtcbiAgICAgICAgaWYgKHdvcmtpbmdIb3Vyc1JhbmdlWzBdIC0gaG91cnMgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnVXNrb3JvIHNlIG90dmFyYS4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdvcmtpbmdIb3Vyc1JhbmdlWzFdIC0gaG91cnMgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnVXNrb3JvIHNlIHphdHZhcmEuJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYFRyZW51dG5vIGplICR7aXNCdXNpbmVzc09wZW4oZGF5TmFtZSwgaG91cnMpID8gJ290dm9yZW5vJyA6ICd6YXR2b3Jlbm8nfS5gO1xufVxuXG5mdW5jdGlvbiBpc0J1c2luZXNzT3BlbihkYXlOYW1lLCBob3Vycykge1xuICAgIGNvbnN0IHdvcmtpbmdIb3Vyc1JhbmdlID0gQlVTSU5FU1NfREFUQS5ob3Vyc1tkYXlOYW1lXTtcbiAgICBpZiAoIXdvcmtpbmdIb3Vyc1JhbmdlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmtpbmdIb3Vyc1JhbmdlWzBdIDw9IGhvdXJzICYmIHdvcmtpbmdIb3Vyc1JhbmdlWzFdID4gaG91cnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgZW1haWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTGlzdDogWydpbmZvcm1hdGlvbicsICdlbWFpbCddXG4gICAgfSk7XG5cbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ2ljb24nXSxcbiAgICAgICAgY29udGVudDogJzxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlIGZhLWZ3XCI+PC9pPicsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsndGV4dCddLFxuICAgICAgICBjb250ZW50OiBgPGEgaHJlZj1cIm1haWx0bzoke0JVU0lORVNTX0RBVEEuZW1haWx9XCI+JHtCVVNJTkVTU19EQVRBLmVtYWlsfTwvYT5gLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTsgXG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgcmV0dXJuIGVtYWlsQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGYWNlYm9va0luZm9ybWF0aW9uKCkge1xuICAgIGNvbnN0IGZhY2Vib29rQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaW5mb3JtYXRpb24nLCAnZmFjZWJvb2snXVxuICAgIH0pO1xuXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIGNsYXNzTGlzdDogWydpY29uJ10sXG4gICAgICAgIGNvbnRlbnQ6ICc8aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vayBmYS1md1wiPjwvaT4nLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTtcbiAgICBmYWNlYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IGZhY2Vib29rID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ3RleHQnXSxcbiAgICAgICAgY29udGVudDogYDxhIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmNvbS8ke0JVU0lORVNTX0RBVEEuZmFjZWJvb2t9L1wiIHRhcmdldD1cIl9ibGFua1wiPkAke0JVU0lORVNTX0RBVEEuZmFjZWJvb2t9PC9hPmAsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGZhY2Vib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhY2Vib29rKTtcblxuICAgIHJldHVybiBmYWNlYm9va0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFncmFtSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgaW5zdGFncmFtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaW5mb3JtYXRpb24nLCAnaW5zdGFncmFtJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnaWNvbiddLFxuICAgICAgICBjb250ZW50OiAnPGkgY2xhc3M9XCJmYWIgZmEtaW5zdGFncmFtIGZhLWZ3XCI+PC9pPicsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIGluc3RhZ3JhbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IGluc3RhZ3JhbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIGNsYXNzTGlzdDogWyd0ZXh0J10sXG4gICAgICAgIGNvbnRlbnQ6IGA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tLyR7QlVTSU5FU1NfREFUQS5pbnN0YWdyYW19L1wiIHRhcmdldD1cIl9ibGFua1wiPkAke0JVU0lORVNTX0RBVEEuaW5zdGFncmFtfTwvYT5gLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTsgXG4gICAgaW5zdGFncmFtQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RhZ3JhbSk7XG5cbiAgICByZXR1cm4gaW5zdGFncmFtQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXAoKSB7XG4gICAgY29uc3QgbWFwID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnbWFwJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IGlmcmFtZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnaWZyYW1lJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgc3JjOiBCVVNJTkVTU19EQVRBLm1hcFNvdXJjZSxcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5J1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbWFwLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgICByZXR1cm4gbWFwO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdENvbnRlbnQoY29udGVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvbnRhY3RJbmZvcm1hdGlvbiA9IGNyZWF0ZUNvbnRhY3RJbmZvcm1hdGlvbigpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9ybWF0aW9uKTtcblxuICAgIGNvbnN0IG1hcCA9IGNyZWF0ZU1hcCgpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RDb250ZW50O1xuIiwiZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7c3RyaW5nWzBdLnRvVXBwZXJDYXNlKCl9JHtzdHJpbmcuc2xpY2UoMSl9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWUsIGNsYXNzTGlzdCA9IG51bGwsIGF0dHJpYnV0ZXMgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgdXNlSW5uZXJIVE1MID0gZmFsc2UgfSkge1xuICAgIGlmICghdGFnTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhZ05hbWUgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHVzZUlubmVySFRNTCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGNhcGl0YWxpemUsIGNyZWF0ZUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==