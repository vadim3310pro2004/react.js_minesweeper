
import createAppSlice from "shared/utils/createAppSlice";
import { fetchUserData } from "../api/accounts.api";


export type ColorScheme = 'dark' | 'light';

export interface AccountsState {
    user: {
        name?: string;
        id?: number;
        email?: string;
        isAuthorized?: boolean; 
        error?: Record<string, any> | null;
    },
}

const initialState = {
    user: {
        isAuthorized: false,
    },
} satisfies AccountsState as AccountsState;


const slice = createAppSlice({
    name: 'accounts',
    initialState,

    reducers: (create) => ({

        logout: create.reducer(state => {
            state.user = {
                isAuthorized: false,
            };
        }),

        updateUserData: create.asyncThunk(
            async () => {
                return await fetchUserData();
            }, 
            {
                fulfilled: (state, action) => {
                    state.user = { 
                        ...state.user, 
                        ...action.payload, 
                        error: null,
                        isAuthorized: true,
                    };
                },
                rejected: (state, action) => {
                    state.user = { 
                        error: action.error,
                        isAuthorized: false,
                    };
                },
            }
        ),

    }),
});


export const accountsReducer = slice.reducer;
export const { 
    updateUserData,
    logout,
} = slice.actions;