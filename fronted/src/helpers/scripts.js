

export const setSession = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const clearSession = (key) => {
    localStorage.removeItem(key);
};
