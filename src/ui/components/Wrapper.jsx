import { useDispatch } from "react-redux";
import Button from "./Button.jsx";
import Content from "./Content.jsx";
import counterSlice from "../../engine/slice/counter.js";

export default function () {
    const dispatch = useDispatch();
    const onIncrement = () => {
        const action = counterSlice.actions.increment(); // {type: 'counter/increment', payload: undefined}
        dispatch(action)
    }
    const onDecrement = () => {
        const action = counterSlice.actions.decrement(); // {type: 'counter/increment', payload: undefined}
        dispatch(action)
    }
    const onForce = () => {
        const action = counterSlice.actions.force(0); // {type: 'counter/increment', payload: 0}
        dispatch(action)
    }
    const onForce10 = () => {
        const action = counterSlice.actions.force(5); // {type: 'counter/increment', payload: 5}
        dispatch(action)
    }
    return (
        <div>
            <Content />
            <p>
                <Button onClick={onIncrement}>+</Button>
                <Button onClick={onDecrement}>-</Button>
                <Button onClick={onForce}>Change to 0</Button>
                <Button onClick={onForce10}>Change to 5</Button>
            </p>
        </div>
    )
}