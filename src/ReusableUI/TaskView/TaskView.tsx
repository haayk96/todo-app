import { memo } from 'react';
import {  Badge, Card, Typography, } from 'antd';
import { ITaskView } from './types';
import { Statuses } from './data';

const { Text, Paragraph } = Typography;
const { Ribbon } = Badge;

function TaskItem({
    title,
    status,
    description,
    deadline,
    actions,
}: ITaskView) {

    return (
        <Ribbon text={Statuses[status].text} color={Statuses[status].color}>
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