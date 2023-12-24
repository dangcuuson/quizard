import _ from 'lodash';
import React from 'react';

/**
 * Sync state to localStorage on value change
 */
export function useLocalStorage<T = string>(args: {
    key: string;
    // value stored in localStorage is string, it's up to the hook consumer to
    // convert the value into correct type
    getInitValue: (value: string | null) => T,
    stringify?: (value: T) => string
}): [T, React.Dispatch<React.SetStateAction<T>>] {
    const { key, getInitValue, stringify } = args;
    const [valueState, setValueState] = React.useState<T>(
        () => {
            const lsValue = localStorage.getItem(key);
            return getInitValue(lsValue);
        }
    )
    React.useEffect(
        () => {
            const strVal = stringify ? stringify(valueState) : (valueState + '');
            localStorage.setItem(key, strVal);
        },
        [valueState]
    )

    return [valueState, setValueState];
}