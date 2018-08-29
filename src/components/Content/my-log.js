import React, { Component } from 'react'
import MyLogCreate from './my-log-create'
import MyLogDisplay from './my-log-display'
import { connect } from 'react-redux'

class MyLog extends Component {
    constructor (props) {
        super(props)
    }

    handleSubmit = (e, content, date) => {
        e.preventDefault()
        this.props.addLog({ date, content })

    }

    render () {
        const {logs} = this.props
        return (
            <div>
                <MyLogCreate handleSubmit={this.handleSubmit}/>
                {logs.map((display, index) =>
                    <MyLogDisplay
                        logDate={display.date}
                        displayContent={display.content}
                        key={index}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    logs: state.logs
})

const mapDispatchToProps = (dispatch) => ({
    addLog: (logInfo) => {
        dispatch({
            type: 'ADD_LOG',
            data: logInfo
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MyLog)