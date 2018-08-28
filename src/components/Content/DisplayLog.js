import React from 'react'
import { Card } from 'antd'

const DisplayLog = ({ logDate, displayContent }) => {
    return (
        <Card title={logDate + '的日志'}
            extra="X"
            style={{ width: '100%' }}
        >
            {displayContent}
        </Card>
    )
}

export default DisplayLog
