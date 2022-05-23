import React from 'react';

const CounterItem = (props) => {
    return (
        <li>
            <button onClick={() => props.plus(props.index,1)}>+1</button>
            <button onClick={() => props.plus(props.index,2)}>+2</button>
            <button onClick={() => props.plus(props.index,3)}>+3</button>
            {' '}
            {props.counter}
            {' '}
            <button>-1</button>
            <button>-2</button>
            <button>-3</button>
        </li>
    );
};

export default CounterItem;
