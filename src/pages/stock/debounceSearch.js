import React, { useCallback, useState } from "react";
import { Input } from "antd"
export const DebounceSearch = ({handleChange}) => {
    const [suggestions, setSuggestions] = useState("");

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

    const optimizedFn = useCallback(debounce(handleChange), []);

    return (
        <>
            <Input
                placeholder="Enter something here..."
                onChange={(e) => optimizedFn(e.target.value)}>
            </Input>
            {suggestions.length > 0 && (
                <div className="autocomplete">
                    {suggestions.map((el, i) => (
                        <div key={i} className="autocompleteItems">
                            <span>{el.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
