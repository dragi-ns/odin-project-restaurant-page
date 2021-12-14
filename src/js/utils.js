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

export { debounce };
