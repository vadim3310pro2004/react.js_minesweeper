import { combineReducers } from '@reduxjs/toolkit';
import { accountsReducer } from 'entities/user';
import { windowReducer } from 'entities/window/store/window.slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["window", "accounts"],
};

const windowPersistConfig = {
  key: 'window',
  storage: storage,
  blacklist: ['modal']
}

const rootReducer = persistReducer(
  persistConfig, 
  combineReducers({
    accounts: accountsReducer,
    window: persistReducer(windowPersistConfig, windowReducer),
  })
);


export default rootReducer;