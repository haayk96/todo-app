import { useGetTasks } from "Hooks/useGetTasks";
import { TaskView } from "ReusableUI/TaskView";
import { List } from "antd";
import { ITask } from "types";

export default function DeletedTasks () {
    const tasks = useGetTasks(true);

    return (
        <List
            grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 4,
            }}
            dataSource={tasks}
            renderItem={({id, title, deadline, description, status}: ITask) => (
                <List.Item>
                    <TaskView
                        key={id}
                        title={title}
                        deadline={deadline}
                        description={description}
                        status={status}
                    />
                </List.Item>
            )}
        />
    )
}

