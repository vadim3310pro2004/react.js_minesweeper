
import createAppSlice from "shared/utils/createAppSlice";
import { fetchUserData } from "../api/accounts.api";


export type ColorScheme = 'dark' | 'light';

export interface AccountsState {
    colorScheme?: ColorScheme;
    user: {
        name?: string;
        id?: number;
        email?: string;
        isAuthorized?: boolean; 
        error?: Record<string, any> | null;
    },
}


const initialState: AccountsState = {
    user: {
        isAuthorized: false,
    },
};


const slice = createAppSlice({
    name: 'accounts',
    initialState: initialState satisfies AccountsState as AccountsState,

    reducers: (create) => ({
        setTheme: create.reducer<ColorScheme>((state, { payload }) => {
            state.colorScheme = payload;
        }),
        
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
    setTheme,
    updateUserData,
    logout,
} = slice.actions;