import React, { Component } from 'react'
import { Layout } from 'antd'
import NewLog from './NewLog'
import DisplayLog from './DisplayLog'

const { Content } = Layout


class DailyLog extends Component {
    constructor (props) {
        super(props)
        this.state = {
            logInfo: []
        }
    }

    handleSubmit = (e, content, date) => {
        e.preventDefault()
        const logInfo = this.state.logInfo

        logInfo.push({ date, content })
        this.setState({
            logInfo: logInfo
        })

    }


    render () {
        return (
            <Content style={{ padding: '0 24px' }}>
                <NewLog handleSubmit={this.handleSubmit}/>
                {this.state.logInfo.map((display, index) =>
                    <DisplayLog
                        logDate={display.date}
                        displayContent={display.content}
                        key={index}/>)}
            </Content>
        )
    }
}

export default DailyLog