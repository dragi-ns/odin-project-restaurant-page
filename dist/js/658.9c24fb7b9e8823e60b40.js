"use strict";
(self["webpackChunkodin_project_restaurant_page"] = self["webpackChunkodin_project_restaurant_page"] || []).push([[658],{

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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvNjU4LmRmODZmMWZlYjdkNzM5MjIxNDJmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxjQUFjLHdCQUF3QixFQUFFLGdCQUFnQjtBQUN4RDs7QUFFQSx5QkFBeUIsb0ZBQW9GO0FBQzdHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICAgIHJldHVybiBgJHtzdHJpbmdbMF0udG9VcHBlckNhc2UoKX0ke3N0cmluZy5zbGljZSgxKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHsgdGFnTmFtZSwgY2xhc3NMaXN0ID0gbnVsbCwgYXR0cmlidXRlcyA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCB1c2VJbm5lckhUTUwgPSBmYWxzZSB9KSB7XG4gICAgaWYgKCF0YWdOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGFnTmFtZSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBpZiAodXNlSW5uZXJIVE1MKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgY2FwaXRhbGl6ZSwgY3JlYXRlRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9