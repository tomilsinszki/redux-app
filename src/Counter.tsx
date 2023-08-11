import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter : number = useSelector((state : {counter: { counter: number }}) => state.counter.counter);

    const incrementHandler = () => {
        dispatch({type: 'increment'});
    };
    const decrementHandler = () => {
        dispatch({type: 'decrement'});
    };

    const toggleCounterHandler = () => {};

    return (
        <main>
            <h1>Redux Counter</h1>
            <div>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
