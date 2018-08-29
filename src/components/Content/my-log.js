import React, { Component } from 'react'
import MyLogCreate from './my-log-create'
import MyLogDisplay from './my-log-display'

class MyLog extends Component {
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
            <div>
                <MyLogCreate handleSubmit={this.handleSubmit}/>
                {this.state.logInfo.map((display, index) =>
                    <MyLogDisplay
                        logDate={display.date}
                        displayContent={display.content}
                        key={index}/>)}
            </div>
        )
    }
}

export default MyLog