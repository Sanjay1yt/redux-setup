import React, { useMemo } from 'react';

export const ExpensiveCalculation = ({ a, b }) => {
    const result = useMemo(() => {
        console.log('Calculating...');
        return a * b;
    }, [a, b]);

    return <p>Result: {result}</p>;
}