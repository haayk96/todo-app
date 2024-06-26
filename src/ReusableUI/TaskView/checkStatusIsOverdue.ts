import { onCheckConvertDate } from "Utils/checkDate";
import { TStatus } from "types";

export const  checkStatusIsOverdue = (deadline: Date | null | number, status: TStatus): TStatus => {
    const date = onCheckConvertDate(deadline);
    if (!date)  return status;
    const timeDifference = date - new Date().getTime();
    return timeDifference  < 0 ? status !== 'deleted' ? 'overdue' : status : status;
}
