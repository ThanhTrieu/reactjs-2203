// luu token vao trong localStorage
import { useState } from 'react';
export const useLocalStorage = (keyName, defaultValue) => {
    const [storeValue, setStoreValue] = useState(() => {
        // xu lu cho gia tri cua useState tra ve (storeValue)
        try {
            const value = window.localStorage.getItem(keyName);
            if(value) {
                return JSON.parse(value);
            } else {
                // defaultValue la object
                // ma luu vao trong localStorage phai la string
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {

        }
    });
}