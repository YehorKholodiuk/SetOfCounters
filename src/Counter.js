import React from 'react';
import CounterItem from "./CounterItem";

const Counter = (props) => {
    return (
        <div>
            {props.counterList.map((el,i) => <CounterItem counter={el} key={i} plus={props.plus} index={i}/>)}
        </div>
    );
};

export default Counter;
