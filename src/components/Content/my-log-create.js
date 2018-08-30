import React from 'react'
import { Card } from 'antd'
import MyLogCreateForm from './my-log-create-form'

const MyLogCreate = ({ handleCreateSubmit }) => {
    const linkToExcellentDaily = 'https://school.thoughtworks.cn/bbs/topic/1230/%E5%A6%82%E4%BD%95%E5%86%99%E4%B8%80%E7%AF%87%E4%BC%98%E7%A7%80%E7%9A%84%E6%88%90%E9%95%BF%E6%97%A5%E5%BF%97'
    const createLog = true
    return (
        <Card
            title="新的日志"
            extra={<a href={linkToExcellentDaily}>如何写一篇优秀的成长日志</a>}
            style={{ width: '100%' }}
        >
            <MyLogCreateForm
                createLog={createLog}
                handleSubmit={(e, textArea, date) => handleCreateSubmit(e, textArea, date)}/>
        </Card>
    )
}

export default MyLogCreate
