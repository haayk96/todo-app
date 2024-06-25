import { lazy } from "react";
import { DeleteOutlined, UnorderedListOutlined } from "@ant-design/icons";

const Tasks = lazy(() => import('./Components/Tasks'))
const DeletedTasks = lazy(() => import('./Components/DeletedTasks'))

export const routes = [
    {
        path: '/tasks',
        name: 'Tasks',
        Component: Tasks,
        Icon: UnorderedListOutlined,
    },
    {
        path: '/deleted-tasks',
        name: 'Trash',
        Component: DeletedTasks,
        Icon: DeleteOutlined,
    },
];