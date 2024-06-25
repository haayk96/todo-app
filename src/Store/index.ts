import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './Slices/TasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;