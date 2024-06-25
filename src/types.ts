export type TStatus = 'completed' | 'overdue' | 'pending' | 'deleted';

export interface ITask {
    id: string;
    title: string;
    description: string;
    deadline: number | null;
    status: TStatus;
}

export interface IReduxState {
    tasks: { items: ITask[] };
}

type TDeadline = number | string;

export interface ITaskFormData<T extends TDeadline> {
    title: string;
    description: string;
    deadline: T | null;
}

export interface ITaskFormDataProps extends ITaskFormData<number> {
    onSave: (data: ITaskFormData<number>) => void;
}