import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "Utils/localStorage";
import { ITask } from "types";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { items: getLocalStorage<ITask[]>('tasks') ?? [] },
    reducers: {
        addNewTasks: (state, action: PayloadAction<ITask>) => {
            const { payload } = action;
            const updatedTasks = [{ ...payload }, ...state.items];
            state.items = updatedTasks;
            setLocalStorage<ITask[]>('tasks', updatedTasks);
        },
        editTask: (state, action: PayloadAction<Partial<ITask> & { id: string }>) => {
            const params = action.payload;
            const index = state.items.findIndex(task => task.id === params.id);
            const updatedTasks = [...state.items];
            updatedTasks[index] = { ...updatedTasks[index], ...params };
            state.items = updatedTasks;
            setLocalStorage<ITask[]>('tasks', updatedTasks);
        }
    },
});

export const { addNewTasks, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;