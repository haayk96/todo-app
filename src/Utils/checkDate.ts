export const onCheckConvertDate = <T extends Date | null | number>(date: T) : number | null =>  date ? new Date(date).getTime() : null;
