
import store, { persistor } from "./store";
import { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate, PersistGateProps } from 'redux-persist/integration/react'


export interface StoreProviderProps extends Omit<PersistGateProps, 'persistor'> { }


const AppStoreProvider: FC<StoreProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};


export default AppStoreProvider;
export type { AppDispatch, RootState } from './store'