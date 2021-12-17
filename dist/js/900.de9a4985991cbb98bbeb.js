"use strict";
(self["webpackChunkodin_project_restaurant_page"] = self["webpackChunkodin_project_restaurant_page"] || []).push([[900,658],{

/***/ 900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu)
});

// EXTERNAL MODULE: ./src/data/business.json
var business = __webpack_require__(182);
;// CONCATENATED MODULE: ./src/data/menu.json
const menu_namespaceObject = JSON.parse('[{"category":"Glavni meni","items":[{"title":"Galska piletina","description":"Pileće belo (200g) u belom sosu sa medom i dižon senfom, pirinčem, šampinjonima, salata.","price":690},{"title":"Beef Bourguignon (veliki)","description":"Juneći ribić (200g), šampinjoni (150g), široki rezanci, salata.","price":720},{"title":"Beef Bourguignon (mali)","description":"Juneći ribić (120g), šampinjoni, salata.","price":500},{"title":"Rižoto sa šampinjonima (posno)","description":"Šampinjoni (300g), pirinač, salata.","price":420}]},{"category":"Salate","items":[{"title":"La petite salata (150g)","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar nunc sed ipsum euismod, vel pulvinar enim efficitur.","price":130},{"title":"La petite salata (200g)","description":"Maecenas accumsan elit eu mauris lobortis interdum.","price":150},{"title":"Pileća salata","description":"Phasellus facilisis imperdiet turpis ut tempor. Cras id ante purus.","price":320},{"title":"Tuna salata","description":"Suspendisse vitae accumsan purus, vel eleifend nisl.","price":400},{"title":"Mediteranska salata","description":"Ut non tincidunt libero. Sed laoreet ac elit nec porta. Nulla quam mauris.","price":330}]},{"category":"Sokovi","items":[{"title":"Sok od zove (0.3l)","description":"Nam et quam congue, interdum justo eu, iaculis velit.","price":100},{"title":"Sok od nane (0.3l)","description":"Vivamus egestas quam in ligula elementum lacinia.","price":100}]}]');
// EXTERNAL MODULE: ./src/js/utils.js
var utils = __webpack_require__(658);
;// CONCATENATED MODULE: ./src/js/menu.js





function createNotification() {
    const notification = (0,utils.createElement)({
        tagName: 'p',
        classList: ['notification'],
        content: `Ovo je demostracija menija. Ažurirani meni možete videti na <a href="https://www.instagram.com/${business/* instagram */.CR}/" target="_blank">@${business/* instagram */.CR}</a>`,
        useInnerHTML: true
    });
    return notification;
}

function createCategoryHeading(category) {
    const categoryHeading = (0,utils.createElement)({
        tagName: 'h2',
        classList: ['title'],
        content: `&nbsp;${category}&nbsp;`,
        useInnerHTML: true
    });
    return categoryHeading;
}

function createMenuItems(items) {
    const menuItems = (0,utils.createElement)({
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
    const menuItem = (0,utils.createElement)({
        tagName: 'div',
        classList: ['menu-item']
    });

    const menuItemHeader = (0,utils.createElement)({
        tagName: 'div',
        classList: ['menu-item-header']
    });

    const menuItemTitle = (0,utils.createElement)({
        tagName: 'span',
        classList: ['menu-item-title'],
        content: title
    });
    menuItemHeader.appendChild(menuItemTitle);

    const menuItemSeparator = (0,utils.createElement)({
        tagName: 'span',
        classList: ['menu-item-separator']
    });
    menuItemHeader.appendChild(menuItemSeparator);

    const menuItemPrice = (0,utils.createElement)({
        tagName: 'span',
        classList: ['menu-item-price'],
        content: price
    });
    menuItemHeader.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemHeader);

    if (description) {
        const menuItemDescription = (0,utils.createElement)({
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

    for (const { category, items } of menu_namespaceObject) {
        const categoryHeading = createCategoryHeading(category);
        contentContainer.appendChild(categoryHeading);

        const menuItems = createMenuItems(items);
        contentContainer.appendChild(menuItems);
    }
}

/* harmony default export */ const menu = (loadMenuContent);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvOTAwLmJhZDlhOTFkN2I5Y2RkNDNiNmI3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN5QjtBQUNSO0FBQ0s7O0FBRS9DO0FBQ0EseUJBQXlCLHVCQUFhO0FBQ3RDO0FBQ0E7QUFDQSxtSEFBbUgsMEJBQXVCLENBQUMsc0JBQXNCLDBCQUF1QixDQUFDO0FBQ3pMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsdUJBQWE7QUFDekM7QUFDQTtBQUNBLHdCQUF3QixFQUFFLFNBQVMsTUFBTTtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHVCQUFhO0FBQ25DO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsMkJBQTJCO0FBQ3JELHFCQUFxQix1QkFBYTtBQUNsQztBQUNBO0FBQ0EsS0FBSzs7QUFFTCwyQkFBMkIsdUJBQWE7QUFDeEM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMEJBQTBCLHVCQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSw4QkFBOEIsdUJBQWE7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwwQkFBMEIsdUJBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsdUJBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQixHQUFHLG9CQUFTO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0YvQjtBQUNBLGNBQWMsd0JBQXdCLEVBQUUsZ0JBQWdCO0FBQ3hEOztBQUVBLHlCQUF5QixvRkFBb0Y7QUFDN0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9tZW51LmNzcyc7XG5pbXBvcnQgQlVTSU5FU1NfREFUQSBmcm9tICcuLi9kYXRhL2J1c2luZXNzLmpzb24nO1xuaW1wb3J0IE1FTlVfREFUQSBmcm9tICcuLi9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vanMvdXRpbHMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24oKSB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ25vdGlmaWNhdGlvbiddLFxuICAgICAgICBjb250ZW50OiBgT3ZvIGplIGRlbW9zdHJhY2lqYSBtZW5pamEuIEHFvnVyaXJhbmkgbWVuaSBtb8W+ZXRlIHZpZGV0aSBuYSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8ke0JVU0lORVNTX0RBVEEuaW5zdGFncmFtfS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5AJHtCVVNJTkVTU19EQVRBLmluc3RhZ3JhbX08L2E+YCxcbiAgICAgICAgdXNlSW5uZXJIVE1MOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnlIZWFkaW5nKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkaW5nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdoMicsXG4gICAgICAgIGNsYXNzTGlzdDogWyd0aXRsZSddLFxuICAgICAgICBjb250ZW50OiBgJm5ic3A7JHtjYXRlZ29yeX0mbmJzcDtgLFxuICAgICAgICB1c2VJbm5lckhUTUw6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2F0ZWdvcnlIZWFkaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbXMoaXRlbXMpIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTGlzdDogWydtZW51LWl0ZW1zJ11cbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGl0ZW0pO1xuICAgICAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVudUl0ZW1zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbSh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UgfSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS1pdGVtJ11cbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtSGVhZGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS1pdGVtLWhlYWRlciddXG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUtaXRlbS10aXRsZSddLFxuICAgICAgICBjb250ZW50OiB0aXRsZVxuICAgIH0pO1xuICAgIG1lbnVJdGVtSGVhZGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1TZXBhcmF0b3IgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS1pdGVtLXNlcGFyYXRvciddXG4gICAgfSk7XG4gICAgbWVudUl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1TZXBhcmF0b3IpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIGNsYXNzTGlzdDogWydtZW51LWl0ZW0tcHJpY2UnXSxcbiAgICAgICAgY29udGVudDogcHJpY2VcbiAgICB9KTtcbiAgICBtZW51SXRlbUhlYWRlci5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUhlYWRlcik7XG5cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS1pdGVtLWRlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICBjb250ZW50OiBkZXNjcmlwdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudUNvbnRlbnQoY29udGVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGNyZWF0ZU5vdGlmaWNhdGlvbigpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcblxuICAgIGZvciAoY29uc3QgeyBjYXRlZ29yeSwgaXRlbXMgfSBvZiBNRU5VX0RBVEEpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlIZWFkaW5nID0gY3JlYXRlQ2F0ZWdvcnlIZWFkaW5nKGNhdGVnb3J5KTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IGNyZWF0ZU1lbnVJdGVtcyhpdGVtcyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51Q29udGVudDtcbiIsImZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3N0cmluZ1swXS50b1VwcGVyQ2FzZSgpfSR7c3RyaW5nLnNsaWNlKDEpfWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoeyB0YWdOYW1lLCBjbGFzc0xpc3QgPSBudWxsLCBhdHRyaWJ1dGVzID0gbnVsbCwgY29udGVudCA9IG51bGwsIHVzZUlubmVySFRNTCA9IGZhbHNlIH0pIHtcbiAgICBpZiAoIXRhZ05hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0YWdOYW1lIGlzIHJlcXVpcmVkIScpO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmIChjbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gICAgfVxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIGlmICh1c2VJbm5lckhUTUwpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBjYXBpdGFsaXplLCBjcmVhdGVFbGVtZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=