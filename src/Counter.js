import React, {useReducer} from "react";

function reducer (state, action) {
    switch (action.type) {
        case "INCREMENT" :
            return state + 1;
        case "DECREMENT" :
            return state - 1;
        default :
            return state;
    }
}

function Counter () {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrement = () => {
        dispatch({type: "INCREMENT"});
    };

    const onDecrement = () => {
      dispatch({type: "DECREMENT"});
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
        </div>
    );
}

export default Counter;