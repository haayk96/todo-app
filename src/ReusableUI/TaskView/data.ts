import { TStatuses } from "./types";

export const Statuses: TStatuses = {
    pending: { color: 'volcano', text: 'Pending' },
    completed: { color: 'green', text: 'Completed' },
    overdue: { color: 'purple', text: 'Overdue' },
    deleted: { color: 'red', text: 'Deleted'  },
};