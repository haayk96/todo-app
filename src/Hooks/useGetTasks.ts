import { useMemo } from "react";
import useMemoSelector from "Store/Hooks/useMemoSelector";
import { getTasks } from "Store/Selectors/tasksSelectors";
import { ITask } from "types";

export function useGetTasks(byDeleted: boolean): ITask[] {
    const { items } = useMemoSelector(getTasks);

    const actualTasks = useMemo(() => items.filter(item => byDeleted ? item.status === 'deleted' : item.status !== 'deleted'), [items, byDeleted]);

    return actualTasks;
}