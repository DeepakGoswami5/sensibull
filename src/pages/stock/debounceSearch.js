import React, { useCallback, useState } from "react";
import { Input } from "antd"
export const DebounceSearch = ({ onhandleChange }) => {
    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const optimizedFn = useCallback(debounce(onhandleChange), []);

    return (
        <>
            <Input
                placeholder="Enter something here..."
                onChange={(e) => optimizedFn(e.target.value)}>
            </Input>
        </>
    );
};
