import { memo } from 'react';
import {  Badge, Card, Typography, } from 'antd';
import { ITaskView } from './types';
import { Statuses } from './data';
import { checkStatusIsOverdue } from './checkStatusIsOverdue';

const { Text, Paragraph } = Typography;
const { Ribbon } = Badge;

function TaskItem({
    title,
    status,
    description,
    deadline,
    actions,
}: ITaskView) {
    const checkedStatus = checkStatusIsOverdue(deadline, status);
    return (
        <Ribbon text={Statuses[checkedStatus].text} color={Statuses[checkedStatus].color}>
            <Card
                title={title}
                type='inner'
                actions={actions}
            >
                {deadline && <Paragraph type='secondary'><Text strong={true}>Deadline</Text>: {new Date(deadline).toDateString()}</Paragraph>}
                {description && <Paragraph type='secondary'><Text strong={true}>Description</Text>: {description}</Paragraph>}
            </Card>
        </Ribbon>
    )
}

export default memo(TaskItem);