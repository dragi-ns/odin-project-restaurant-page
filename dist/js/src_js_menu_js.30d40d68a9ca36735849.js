"use strict";
(self["webpackChunkodin_project_restaurant_page"] = self["webpackChunkodin_project_restaurant_page"] || []).push([["src_js_menu_js"],{

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _data_business_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/business.json */ "./src/data/business.json");
/* harmony import */ var _data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/menu.json */ "./src/data/menu.json");
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/utils.js */ "./src/js/utils.js");





function createNotification() {
    const notification = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
        tagName: 'p',
        classList: ['notification'],
        content: `Ovo je demostracija menija. Ažurirani meni možete videti na <a href="https://www.instagram.com/${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.instagram}/" target="_blank">@${_data_business_json__WEBPACK_IMPORTED_MODULE_1__.instagram}</a>`,
        useInnerHTML: true
    });
    return notification;
}

function createCategoryHeading(category) {
    const categoryHeading = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
        tagName: 'h2',
        classList: ['title'],
        content: `&nbsp;${category}&nbsp;`,
        useInnerHTML: true
    });
    return categoryHeading;
}

function createMenuItems(items) {
    const menuItems = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
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
    const menuItem = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
        tagName: 'div',
        classList: ['menu-item']
    });

    const menuItemHeader = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
        tagName: 'div',
        classList: ['menu-item-header']
    });

    const menuItemTitle = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
        tagName: 'span',
        classList: ['menu-item-title'],
        content: title
    });
    menuItemHeader.appendChild(menuItemTitle);

    const menuItemSeparator = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
        tagName: 'span',
        classList: ['menu-item-separator']
    });
    menuItemHeader.appendChild(menuItemSeparator);

    const menuItemPrice = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
        tagName: 'span',
        classList: ['menu-item-price'],
        content: price
    });
    menuItemHeader.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemHeader);

    if (description) {
        const menuItemDescription = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createElement)({
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

    for (const { category, items } of _data_menu_json__WEBPACK_IMPORTED_MODULE_2__) {
        const categoryHeading = createCategoryHeading(category);
        contentContainer.appendChild(categoryHeading);

        const menuItems = createMenuItems(items);
        contentContainer.appendChild(menuItems);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuContent);


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

/***/ }),

/***/ "./src/data/menu.json":
/*!****************************!*\
  !*** ./src/data/menu.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"category":"Glavni meni","items":[{"title":"Galska piletina","description":"Pileće belo (200g) u belom sosu sa medom i dižon senfom, pirinčem, šampinjonima, salata.","price":690},{"title":"Beef Bourguignon (veliki)","description":"Juneći ribić (200g), šampinjoni (150g), široki rezanci, salata.","price":720},{"title":"Beef Bourguignon (mali)","description":"Juneći ribić (120g), šampinjoni, salata.","price":500},{"title":"Rižoto sa šampinjonima (posno)","description":"Šampinjoni (300g), pirinač, salata.","price":420}]},{"category":"Salate","items":[{"title":"La petite salata (150g)","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar nunc sed ipsum euismod, vel pulvinar enim efficitur.","price":130},{"title":"La petite salata (200g)","description":"Maecenas accumsan elit eu mauris lobortis interdum.","price":150},{"title":"Pileća salata","description":"Phasellus facilisis imperdiet turpis ut tempor. Cras id ante purus.","price":320},{"title":"Tuna salata","description":"Suspendisse vitae accumsan purus, vel eleifend nisl.","price":400},{"title":"Mediteranska salata","description":"Ut non tincidunt libero. Sed laoreet ac elit nec porta. Nulla quam mauris.","price":330}]},{"category":"Sokovi","items":[{"title":"Sok od zove (0.3l)","description":"Nam et quam congue, interdum justo eu, iaculis velit.","price":100},{"title":"Sok od nane (0.3l)","description":"Vivamus egestas quam in ligula elementum lacinia.","price":100}]}]');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX2pzX21lbnVfanMuMzBkNDBkNjhhOWNhMzY3MzU4NDkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ3lCO0FBQ1I7QUFDSzs7QUFFL0M7QUFDQSx5QkFBeUIsMkRBQWE7QUFDdEM7QUFDQTtBQUNBLG1IQUFtSCwwREFBdUIsQ0FBQyxzQkFBc0IsMERBQXVCLENBQUM7QUFDekw7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwyREFBYTtBQUN6QztBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsU0FBUyxNQUFNO0FBQ3pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsMkRBQWE7QUFDbkM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwyQkFBMkI7QUFDckQscUJBQXFCLDJEQUFhO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLOztBQUVMLDJCQUEyQiwyREFBYTtBQUN4QztBQUNBO0FBQ0EsS0FBSzs7QUFFTCwwQkFBMEIsMkRBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDhCQUE4QiwyREFBYTtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDBCQUEwQiwyREFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQywyREFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCLEdBQUcsNENBQVM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRi9CO0FBQ0EsY0FBYyx3QkFBd0IsRUFBRSxnQkFBZ0I7QUFDeEQ7O0FBRUEseUJBQXlCLG9GQUFvRjtBQUM3RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzPzE2MjEiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuLi9jc3MvbWVudS5jc3MnO1xuaW1wb3J0IEJVU0lORVNTX0RBVEEgZnJvbSAnLi4vZGF0YS9idXNpbmVzcy5qc29uJztcbmltcG9ydCBNRU5VX0RBVEEgZnJvbSAnLi4vZGF0YS9tZW51Lmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL2pzL3V0aWxzLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKCkge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgIGNsYXNzTGlzdDogWydub3RpZmljYXRpb24nXSxcbiAgICAgICAgY29udGVudDogYE92byBqZSBkZW1vc3RyYWNpamEgbWVuaWphLiBBxb51cmlyYW5pIG1lbmkgbW/FvmV0ZSB2aWRldGkgbmEgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJHtCVVNJTkVTU19EQVRBLmluc3RhZ3JhbX0vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QCR7QlVTSU5FU1NfREFUQS5pbnN0YWdyYW19PC9hPmAsXG4gICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBub3RpZmljYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5SGVhZGluZyhjYXRlZ29yeSkge1xuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnaDInLFxuICAgICAgICBjbGFzc0xpc3Q6IFsndGl0bGUnXSxcbiAgICAgICAgY29udGVudDogYCZuYnNwOyR7Y2F0ZWdvcnl9Jm5ic3A7YCxcbiAgICAgICAgdXNlSW5uZXJIVE1MOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNhdGVnb3J5SGVhZGluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW1zKGl0ZW1zKSB7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS1pdGVtcyddXG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShpdGVtKTtcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVJdGVtcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlIH0pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUtaXRlbSddXG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51SXRlbUhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUtaXRlbS1oZWFkZXInXVxuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIGNsYXNzTGlzdDogWydtZW51LWl0ZW0tdGl0bGUnXSxcbiAgICAgICAgY29udGVudDogdGl0bGVcbiAgICB9KTtcbiAgICBtZW51SXRlbUhlYWRlci5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtU2VwYXJhdG9yID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUtaXRlbS1zZXBhcmF0b3InXVxuICAgIH0pO1xuICAgIG1lbnVJdGVtSGVhZGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtU2VwYXJhdG9yKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtUHJpY2UgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS1pdGVtLXByaWNlJ10sXG4gICAgICAgIGNvbnRlbnQ6IHByaWNlXG4gICAgfSk7XG4gICAgbWVudUl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1QcmljZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1IZWFkZXIpO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUtaXRlbS1kZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgY29udGVudDogZGVzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVDb250ZW50KGNvbnRlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBjcmVhdGVOb3RpZmljYXRpb24oKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG5cbiAgICBmb3IgKGNvbnN0IHsgY2F0ZWdvcnksIGl0ZW1zIH0gb2YgTUVOVV9EQVRBKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SGVhZGluZyA9IGNyZWF0ZUNhdGVnb3J5SGVhZGluZyhjYXRlZ29yeSk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbXMgPSBjcmVhdGVNZW51SXRlbXMoaXRlbXMpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudUNvbnRlbnQ7XG4iLCJmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICAgIHJldHVybiBgJHtzdHJpbmdbMF0udG9VcHBlckNhc2UoKX0ke3N0cmluZy5zbGljZSgxKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHsgdGFnTmFtZSwgY2xhc3NMaXN0ID0gbnVsbCwgYXR0cmlidXRlcyA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCB1c2VJbm5lckhUTUwgPSBmYWxzZSB9KSB7XG4gICAgaWYgKCF0YWdOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGFnTmFtZSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBpZiAodXNlSW5uZXJIVE1MKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgY2FwaXRhbGl6ZSwgY3JlYXRlRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9