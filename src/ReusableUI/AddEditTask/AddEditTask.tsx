// import { Button, DatePicker, Input, Modal, Form, Flex, Space, Typography } from "antd";
// import { IAddEditTask } from "./types";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useAddEditLogic } from "./useAddEditLogic";
// import { useCallback } from "react";


// const { Item } = Form;

// const schema = yup
//   .object({
//     title: yup.string().required('field is required!'),
//     description: yup.string().notRequired(),
//     deadline: yup.date().default(() => new Date()).notRequired(),

//   })
//   .required()

// export default function AddEditTask({
//     actionType,
//     title = '',
//     description = '',
//     deadline,
//     onCancel,
//     onSave,
//     ...props
// }: IAddEditTask) {
//     const { register, handleSubmit, formState:{ errors } } = useForm({
//         defaultValues: schema.cast({ title: 'Title', description: 'Desc', deadline: new Date() }),
//         resolver: yupResolver(schema),
//     });


//     return (
//         <Modal
//             {...props}
//             title={`${actionType} Task`}
            // footer={[
            //     <Button key='cancel' type='default' form='addEditTask' onClick={onCancel}>cancel</Button>,
            //     <Button key={actionType} htmlType='submit' type='primary' form='addEditTask'>{actionType}</Button>
            // ]}
//         >
//             <form onSubmit={handleSubmit(onSave)} id='addEditTask'>
//                 <Typography.Paragraph style={{margin: '16px 0 8px'}}>
//                     Title * {errors.title?.message && <Typography.Text type='danger'>{errors.title?.message}</Typography.Text>}
//                 </Typography.Paragraph>
//                 <input type="text" placeholder='Title*' {...register('title')}/>
//                 <Typography.Paragraph style={{margin: '16px 0 8px'}}>Deadline</Typography.Paragraph>
//                 <input type="date" {...register('deadline')} placeholder="MM/DD/YYYY"/>
//                 <Typography.Paragraph style={{margin: '16px 0 8px'}}>Description</Typography.Paragraph>
//                 <textarea
//                     style={{ resize: 'none', width: '100%' }}
//                     rows={10}
//                     placeholder='Description'
//                     {...register('description')}
//                 />
//            </form>
//         </Modal>
//     )
// }

export default {}