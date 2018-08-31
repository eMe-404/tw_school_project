import React, { Component } from 'react'
import MyDiaryCreateCard from './my-diary-create-card'
import MyDiaryListItem from './my-diary-list-item'
import { connect } from 'react-redux'
import dataSource from './data-source'
import { Pagination } from 'antd'


class MyDiary extends Component {

    handleCreate = (e, text, date) => {
        e.preventDefault()
        this.props.addLog({ date, text })
    }

    handleUpdate = (e, text, date, logId) => {
        e.preventDefault()
        this.props.updateLog({ text, date, logId })
    }


    handleDelete = (logId) => {
        this.props.deleteLog(logId)
    }

    render () {
        const { diaries } = this.props
        const myDiaryList = diaries.map((log, index) => (
            <MyDiaryListItem
                {...log}
                logId={index}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
                key={index}/>
        ))
        return (
            <div>
                <MyDiaryCreateCard
                    handleCreateSubmit={this.handleCreate}
                    text={dataSource.text}
                    date={dataSource.date}
                />
                {myDiaryList}
                <Pagination showSizeChanger defaultCurrent={1} total={1}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    diaries: state.diaries
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


export default connect(mapStateToProps, mapDispatchToProps)(MyDiary)