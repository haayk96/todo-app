import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { TaskView } from "ReusableUI/TaskView";
import { Badge, Button, Checkbox, Flex, List, Modal, Typography, notification } from "antd";
import { ITask } from "types";
import { useGetTasks } from "Hooks/useGetTasks";
import { useManageTasks } from "./useManageTasks";
import { TaskForm } from "ReusableUI/TaskForm";
import { DELETE_CONFIRMATION_TEXT, TASK_FORM_ID } from "Constants/Tasks";

const { Text, Title } = Typography;

export default function Tasks () {

    const [api, contextHolder] = notification.useNotification();
    const tasks = useGetTasks(false);
    const {
        deleteHandler,
        completehandler,
        selectedTaskParams,
        setSelectedTaskParams,
        addEditModalOpen,
        deleteModalOpen,
        onSubmit,
        resetTaskParams,
    } = useManageTasks(api);

    return (
        <>
            <Flex justify='space-between' style={{ paddingBottom: 24, paddingTop: 8 }}>
                <Badge count={tasks.length}>
                    <Title level={5} style={{ padding: '0 8px'}}>Tasks</Title>
                </Badge>
                <Button
                    icon={<PlusOutlined />}
                    iconPosition='end'
                    onClick={() => setSelectedTaskParams({ actionType: 'Add' })}
                >
                    Add new task
                </Button>
            </Flex>
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
                            actions={[
                                <EditOutlined key="edit" onClick={() => setSelectedTaskParams({id, title, deadline, description, status, actionType: 'Edit'})}/>,
                                <DeleteOutlined key="ellipsis" onClick={() => setSelectedTaskParams({ id, title, actionType: 'Delete' })} />,
                                <Checkbox
                                    checked={status === 'completed'}
                                    disabled={status === 'overdue'}
                                    onChange={() => completehandler(id, status)}
                                >Complete
                                </Checkbox>
                            ]}
                        />
                    </List.Item>
                )}
            />
            {
                deleteModalOpen &&
                <Modal
                    okText='Confirm'
                    title={`Task - ${selectedTaskParams?.title}`}
                    closable={true}
                    open={deleteModalOpen}
                    onOk={() => deleteHandler( selectedTaskParams?.id as string, selectedTaskParams?.title as string)}
                    onCancel={resetTaskParams}
                >
                    <Text>{DELETE_CONFIRMATION_TEXT}</Text>
                </Modal>
            }
            {
                addEditModalOpen &&
                <Modal
                    title={`${selectedTaskParams?.actionType} Task`}
                    closable={true}
                    open={addEditModalOpen}
                    onCancel={resetTaskParams}
                    footer={[
                        <Button key={selectedTaskParams?.actionType} htmlType='submit' type='primary' form={TASK_FORM_ID}>{selectedTaskParams?.actionType}</Button>,
                        <Button key='cancel' type='default'  onClick={() => setSelectedTaskParams({})}>cancel</Button>,
                    ]}
                >
                    <TaskForm
                        title={selectedTaskParams?.title as string}
                        description={selectedTaskParams?.description || ''}
                        deadline={selectedTaskParams?.deadline || null}
                        onSave={onSubmit}
                    />
                </Modal>
            }
            {contextHolder}
        </>
    )
}

