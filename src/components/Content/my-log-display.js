import React from 'react'
import { Card, Popconfirm, message, Icon } from 'antd'
import ReactMarkdown from 'react-markdown'


const MyLogDisplay = ({ logDate, displayContent }) => {

    function confirm () {
        message.success('Click on Yes')
    }

    function cancel () {
        message.error('Click on No')
    }

    return (
        <Card
            title={logDate.format('YYYY-MM-DD') + '的日志'}
            extra={
                <Popconfirm
                    title="确定删除吗?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="确定"
                    cancelText="取消">
                    <Icon type="close" />
                </Popconfirm>
            }
            style={{ width: '100%' }}
        >
            <ReactMarkdown source={displayContent}/>
        </Card>
    )
}

export default MyLogDisplay
