import { createSlice } from '@reduxjs/toolkit';


const testsSlice = createSlice({
    name: 'tests',
    initialState: {
        wasItDispatched: false
    },
    reducers: {
        dispatchTest: ( state, action ) => {
            state.wasItDispatched = true;
        }
    }
})

export const testsReducer = testsSlice.reducer;

export const { dispatchTest } = testsSlice.actions