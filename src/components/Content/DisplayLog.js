import React from 'react'
import { Card } from 'antd'

const DisplayLog = ({ logDate, displayContent }) => {
    const content = linesToParagraphs(displayContent)

    function linesToParagraphs (...nodes) {
        return nodes
            .map(node => typeof node === 'string' ?
                node.split('\n')
                    .map((text, index) => <p key={index}>{text}</p>) : node)
            .reduce((nodes, node) => nodes.concat(node), [])
    }

    return (
        <Card
            title={logDate.format('YYYY-MM-DD') + '的日志'}
            extra="X"
            style={{ width: '100%' }}
        >
            {content}
        </Card>
    )
}

export default DisplayLog
