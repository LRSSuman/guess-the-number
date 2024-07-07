import React from 'react';

const Result = ({ screteNum, term }) => {
    let result;
    if (term) {
        if (term > screteNum) {
            result = 'Higher';
        } else if (term < screteNum) {
            result = 'Lower';
        } else if (term == screteNum) {
            result = 'Yipee! correct';
        } else {
            result = 'enter valid input';
        }
    }
    return <h3>You Guessed: {result}</h3>;
};

export default Result;
