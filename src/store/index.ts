import { Action, configureStore } from '@reduxjs/toolkit';

const counterReducer = (state: {counter: number} = { counter: 0 }, action: Action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store;
