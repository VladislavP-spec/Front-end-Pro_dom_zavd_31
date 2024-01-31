import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0, loading: false },
    reducers: {
        force: (state, action) => {
            state.value = action.payload;
        },
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        }
    }
})

export const selectorsValue = state => state.counter.value;
export default counterSlice;  // = { actions: { increment, decrement }, reducer }