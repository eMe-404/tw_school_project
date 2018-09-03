import React, { Component } from 'react'
import MyDiaryCreateCard from './my-diary-create-card'
import MyDiaryListItem from './my-diary-list-item'
import { connect } from 'react-redux'
import dataSource from './data-source'
import { Pagination } from 'antd'
import { loadDiaries, addDiaryWithDispatch, deleteDiaryWithDispatch, updateDiaryWithDispatch } from '../actions/diaries'

class MyDiary extends Component {

    componentDidMount() {
        const { loadDiaries } = this.props
        loadDiaries()
    }

    handleCreate = (e, text, momentDate) => {
        e.preventDefault()
        const date = momentDate.format('YYYY-MM-DD')
        this.props.addDiary({ date, text })
    }

    handleUpdate = (e, text, date, id) => {
        e.preventDefault()
        this.props.updateDiary({ text, date, id })
    }


    handleDelete = (logId) => {
        this.props.deleteDiary(logId)
    }

    render() {
        const { diaries, pageable } = this.props
        const myDiaryList = diaries.map((log, index) => (
            <MyDiaryListItem
                {...log}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
                key={index} />
        ))
        return (
            <div>
                <MyDiaryCreateCard
                    handleCreateSubmit={this.handleCreate}
                    text={dataSource.text}
                    date={dataSource.date}
                />
                {myDiaryList}
                <Pagination
                    showSizeChanger
                    current={1}
                    total={diaries.length}
                    style={{ margin: 10 }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    diaries: state.diaries,
    pageable: state.diaries.pageable
})

const mapDispatchToProps = (dispatch) => ({
    loadDiaries: () => {
        dispatch(loadDiaries())
    },

    addDiary: (logInfo) => {
        dispatch(addDiaryWithDispatch(logInfo))
    },

    deleteDiary: (logId) => {
        dispatch(deleteDiaryWithDispatch(logId))
    },

    updateDiary: (logInfo) => {
        dispatch(updateDiaryWithDispatch(logInfo))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MyDiary)