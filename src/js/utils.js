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

function debounce(fn, delay, leading = false) {
    let timeoutID = null;
    return (...args) => {
        const shouldCallNow = leading && !timeoutID;
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            timeoutID = null;
            if (!leading) {
                fn(...args);
            }
        }, delay);
        if (shouldCallNow) {
            fn(...args);
        }
    };
}

export { capitalize, createElement, debounce };
