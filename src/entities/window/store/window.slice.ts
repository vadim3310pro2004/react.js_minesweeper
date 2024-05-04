import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";


export type ColorScheme = 'dark' | 'light';

export interface WindowState {
    colorScheme?: ColorScheme;
    modal: {
        isOpen?: boolean;
        body?: ReactNode;
    };
}

const initialState = {
    modal: {
        isOpen: false,
    },
} satisfies WindowState as WindowState;


const windowSlice = createSlice({
    name: "windowSlice",
    initialState,
    reducers: {
        
        setTheme(state, { payload }: PayloadAction<ColorScheme>) {
            state.colorScheme = payload;
        },

        setModalIsOpen(state, { payload }: PayloadAction<boolean>) {
            state.modal.isOpen = payload;
        },
        
        setModalBody(state, { payload }: PayloadAction<ReactNode>) {
            state.modal.body = payload;
        },

    }
});


export const windowReducer = windowSlice.reducer;
export const { 
    setTheme,
    setModalIsOpen,
    setModalBody,
} = windowSlice.actions;