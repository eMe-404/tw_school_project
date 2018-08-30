import React, { Component } from 'react'
import MyLogCreate from './my-log-create'
import MyLogDisplay from './my-log-display'
import { connect } from 'react-redux'

class MyLog extends Component {

    handleCreate = (e, content, date) => {
        e.preventDefault()
        this.props.addLog({ date, content })
    }

    handleUpdate = (e, content, date, logId) => {
        e.preventDefault()
        this.props.updateLog({ content, date, logId })
    }


    handleDelete = (logId) => {
        this.props.deleteLog(logId)
    }

    render () {
        const { logs } = this.props
        return (
            <div>
                <MyLogCreate handleCreateSubmit={this.handleCreate}/>
                {logs.map((log, index) =>
                    <MyLogDisplay
                        {...log}
                        logId={index}
                        handleUpdate={this.handleUpdate}
                        handleDelete={this.handleDelete}
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
    },
    deleteLog: (logId) => {
        dispatch({
            type: 'DELETE_LOG',
            data: logId
        })
    },
    updateLog: (logInfo) => {
        dispatch({
            type: 'UPDATE_LOG',
            data: logInfo
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MyLog)