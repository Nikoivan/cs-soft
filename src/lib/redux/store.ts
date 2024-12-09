import { combineSlices, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { tableSlice } from './slices/tableSlice';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineSlices(tableSlice);
const store = configureStore({
  reducer: rootReducer ,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

// sagaMiddleware.run(rootSaga)

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
