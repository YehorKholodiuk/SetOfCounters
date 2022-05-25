import React from 'react';
import DeleteItem from "./DeleteItem";

const CounterItem = (props) => {
    return (
        <li>
            <button onClick={() => props.plus(props.index,1)}>+1</button>
            {' '}
            <button onClick={() => props.plus(props.index,2)}>+2</button>
            {' '}
            <button onClick={() => props.plus(props.index,3)}>+3</button>
            {' '}
            {props.counter}
            {' '}
            <button onClick={() => props.minus(props.index,1)}>-1</button>
            {' '}
            <button onClick={() => props.minus(props.index,2)} >-2</button>
            {' '}
            <button onClick={() => props.minus(props.index,3)} >-3</button>
            {' '}
            <DeleteItem deleteItem={props.deleteItem} index={props.index}/>
        </li>
    );
};

export default CounterItem;
