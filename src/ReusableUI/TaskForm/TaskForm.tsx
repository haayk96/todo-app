import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Input } from 'antd';
import { TASK_FORM_ID } from 'Constants/Tasks';
import { ITaskFormData, ITaskFormDataProps } from 'types';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string(),
  deadline: yup.date().nullable(),
});

export default function TaskForm({
    title,
    description = '',
    deadline,
    onSave,
}: ITaskFormDataProps) {
    const { control, handleSubmit, formState: { errors } } = useForm<ITaskFormData<string>>({
        defaultValues: {
            title,
            description,
            deadline: deadline ? new Date(deadline).toISOString().split('T')[0] : null,
        },
        // @ts-ignore temp.
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ title, description, deadline }: ITaskFormData<string>) => {
        onSave({
            title,
            description: description || '',
            deadline: deadline ? new Date(deadline).getTime() : null,
        })
    };

    return (
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)} id={TASK_FORM_ID}>
            <Form.Item
                label="Title"
                required
                validateStatus={errors.title ? 'error' : 'success'}
                help={errors.title?.message}
            >
            <Controller
                name="title"
                control={control}
                render={({ field }) => <Input {...field} />}
                />
            </Form.Item>
            <Form.Item label="Description">
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <Input.TextArea {...field} />}
                />
            </Form.Item>
            <Form.Item label="Deadline">
                <Controller
                    name="deadline"
                    control={control}
                    // @ts-ignore
                    render={({ field }) => <Input type="date" {...field}/>}
                />
            </Form.Item>
        </Form>
    )
}