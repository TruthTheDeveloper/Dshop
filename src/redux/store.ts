import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import authReducer from './auth/authSlice';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Require cycle: ','redux-persist failed to create sync storage'])
const reducers = combineReducers({
  //whatever you're putting here, make sure you've typed it in the "storeSliceType.ts" file

  authReducer

 
});

const persistConfig:any = {
  key: 'root',
  storage: AsyncStorage,
  serialize: (data: any) => {
    return JSON.stringify({
      ...data,
      socket: null,
    });
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const resetStore = () => {
  const rootState = store.getState();
  const resetAction = {type: 'RESET_STORE'};
  Object.keys(rootState).forEach(key => {
    store.dispatch({...resetAction, meta: {key}});
  });
};


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
