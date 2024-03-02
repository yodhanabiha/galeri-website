import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: LayoutState = {
    showSidebar: false,
};

export const LayoutSlice = createSlice({
    name: "layout",
    initialState: initialState,
    reducers: {
        setShowSidebar: (state, action: PayloadAction<boolean>) => {
            state.showSidebar = action.payload
        },
    }
})

export interface LayoutState {
    showSidebar: boolean;
}
