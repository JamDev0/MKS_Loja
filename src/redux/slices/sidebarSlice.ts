import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isSidebarOpen: false,
    },
    reducers: {
        toggleSidebar: ( state ) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})

export const sidebarReducer = sidebarSlice.reducer;

export const { toggleSidebar } = sidebarSlice.actions;