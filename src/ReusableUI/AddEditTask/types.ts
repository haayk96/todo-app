import { ModalProps } from "antd";
import { ITask } from "types";
import { Maybe } from "yup";

type TActionTypes = 'Add' | 'Edit' | 'Delete';

export interface IAddEditTask extends Partial<Omit<ITask, 'title'>>, ModalProps {
    actionType?: TActionTypes;
    onSave: (data: { description?: Maybe<string | undefined>; title: string; deadline: Date | null; }) => void;
}