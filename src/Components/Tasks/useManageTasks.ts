import { NotificationInstance } from "antd/es/notification/interface";
import { DELETE_NOTIFICATION_TEXT, EDIT_ITEM_TEXT } from "Constants/Tasks";
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTasks, editTask } from 'Store/Slices/TasksSlice';
import { ITask, TStatus } from "types";
import { ITaskFormData } from "types";
import { onCheckConvertDate } from "Utils/checkDate";

export function useManageTasks(notificationAPI: NotificationInstance) {
    const dispatch = useDispatch();
    const [selectedTaskParams, setSelectedTaskParams] = useState<Partial<ITask & {actionType: 'Edit' | 'Add' | 'Delete'}>>({});

    const completehandler = useCallback((id: string, status: TStatus) => {
        dispatch(editTask({ id, status:  status === 'completed' ? 'pending' : 'completed' }));
    }, [dispatch,]);

    const deleteHandler = useCallback((id: string, title: string) =>  {
        setSelectedTaskParams({});
        dispatch(editTask({ id, status: 'deleted' }));
        notificationAPI['success']({
            closable: false,
            message: `Task - ${title}`,
            description: DELETE_NOTIFICATION_TEXT,
            duration: 3,
            placement: 'bottomLeft',
        });
    }, [dispatch, setSelectedTaskParams, notificationAPI]);

    const resetTaskParams = useCallback(() => setSelectedTaskParams({}), []);

    const addEditModalOpen = useMemo(() => selectedTaskParams?.actionType === 'Add' || selectedTaskParams?.actionType === 'Edit', [selectedTaskParams?.actionType]);

    const deleteModalOpen = useMemo(() => selectedTaskParams?.actionType === 'Delete', [selectedTaskParams?.actionType]);

    const editTaskHandler = useCallback(({ title, description, deadline }: ITaskFormData<number>) => {

        dispatch(editTask({
            id: selectedTaskParams.id!,
            title,
            description,
            deadline: onCheckConvertDate(deadline),
            status: 'pending'
        }));

        resetTaskParams();

        notificationAPI['success']({
            closable: false,
            message: `Task - ${title}`,
            description: EDIT_ITEM_TEXT,
            duration: 3,
            placement: 'bottomLeft',
        });
    }, [dispatch, selectedTaskParams, resetTaskParams, notificationAPI]);

    const addTaskHandler = useCallback(({ title, description = '', deadline = null }: ITaskFormData<number>) => {
        const id = new Date().getTime().toString();

        dispatch(addNewTasks({
            id,
            title,
            description,
            deadline: onCheckConvertDate(deadline),
            status: 'pending'
        }));

        resetTaskParams();

        notificationAPI['success']({
            closable: false,
            message: `Task - ${title}`,
            description: EDIT_ITEM_TEXT,
            duration: 3,
            placement: 'bottomLeft',
        });
    }, [dispatch, resetTaskParams, notificationAPI]);

    const onSubmit = useCallback((data: ITaskFormData<number>) => {
        const handler = selectedTaskParams.actionType === 'Add' ? addTaskHandler : editTaskHandler;
        handler(data)
    }, [selectedTaskParams, addTaskHandler, editTaskHandler]);

    return {
        deleteHandler,
        completehandler,
        selectedTaskParams,
        setSelectedTaskParams,
        addEditModalOpen,
        deleteModalOpen,
        onSubmit,
        resetTaskParams,
    }
}