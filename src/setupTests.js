// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const localStorageMock = (function() {
    let store = {}
    return {
        getItem: function(key) {
            return store[key]
        },
        setItem: function(key, value) {
            store[key] = value
        },
        values: function() {
            return store
        }
    }
})()

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
})