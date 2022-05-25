import React from 'react';

const DeleteItem = (props) => {
    return (
        <div>
            <button onClick={() => props.deleteItem(props.index)}>Delete</button>
        </div>
    );
};

export default DeleteItem;
