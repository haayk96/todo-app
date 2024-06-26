import { ReactNode } from "react";
import { ITask, TStatus } from "types";

type TStatusText = 'Pending' | 'Completed' | 'Overdue' | 'Deleted';

type TStatusTextColor = 'volcano' | 'green' | 'purple' | 'red';

interface IStatusParams {
    color: TStatusTextColor;
    text: TStatusText;
}

export type  TStatuses = {
    [key in TStatus]: IStatusParams;
}

export interface ITaskView extends Omit<ITask, 'id'> {
    actions?: ReactNode[]
}