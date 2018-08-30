import React, { Component } from 'react'
import MyLogCreate from './my-log-create'
import MyLogDisplay from './my-log-display'
import { connect } from 'react-redux'

class MyLog extends Component {

    handleSubmit = (e, content, date) => {
        e.preventDefault()
        this.props.addLog({ date, content })
    }

    handleDelete = (logId) => {
        this.props.deleteLog(logId)
    }

    render() {
        const { logs } = this.props
        return (
            <div>
                <MyLogCreate handleSubmit={this.handleSubmit} />
                {logs.map((log, index) =>
                    <MyLogDisplay
                        {...log}
                        logId={index}
                        handleDelete={this.handleDelete}
                        key={index} />)}
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
    },
    deleteLog: (logId) => {
        dispatch({
            type: 'DELETE_LOG',
            data: logId
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MyLog)