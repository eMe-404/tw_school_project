import React, { Component } from 'react'
import { Layout } from 'antd'
import NewLog from './NewLog'
import DisplayLog from './DisplayLog'

const { Content } = Layout


class DailyLog extends Component {
    constructor (props) {
        super(props)
        this.state = {
            date: '',
            summariseContent: []
        }
    }

    handleSubmit = (e, textArea, date) => {
        e.preventDefault()
        const newSummariseContent = this.state.summariseContent
        newSummariseContent.push(textArea)
        this.setState({
            date: date.format('YYYY-MM-DD'),
            summariseContent: newSummariseContent
        })

    }


    render () {
        return (
            <Content style={{ padding: '0 24px' }}>
                <NewLog handleSubmit={this.handleSubmit}/>
                {this.state.summariseContent.map((value, index) =>
                    <DisplayLog
                        logDate={this.state.date}
                        displayContent={value}
                        key={index}/>)}
            </Content>
        )
    }
}

export default DailyLog