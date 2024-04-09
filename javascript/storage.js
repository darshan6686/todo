 function getValueForLocalStorage(key, defaultVal = true) {
    return defaultVal ? localStorage.getItem(key) : [];
}

 function setValueForLocalStorage(key, value, defaultVal = true) {
    defaultVal ? localStorage.setItem(key, JSON.stringify(value)) : [];
}