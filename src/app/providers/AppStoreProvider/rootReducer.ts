import { combineReducers } from '@reduxjs/toolkit';
import { accountsReducer } from 'entities/accounts';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['accounts'],
};

const rootReducer = persistReducer(persistConfig, combineReducers({
  accounts: accountsReducer,
}));


export default rootReducer;