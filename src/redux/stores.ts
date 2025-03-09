import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from './combine-reducers.ts';
import { ThunkDispatch, configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: combineReducers,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, any>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
