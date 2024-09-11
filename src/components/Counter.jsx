import { useReducer } from "react";

const intitialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, intitialState);
    return (
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={() => dispatch("increment")}>
                Increment
            </button>
            <button type="button" onClick={() => dispatch("decrement")}>
                Decrement
            </button>
        </div>
    );
}

export default Counter
