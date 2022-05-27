import React from 'react';

const InputTodo = (props) => {
    console.log('input render');
    return (
        <input
            value={props.val}
            onChange={props.change}
            type={props.type}
        />
    )
}
export default React.memo(InputTodo);