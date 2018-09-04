import React, { Component } from 'react'
import MyDiaryCreateCard from './my-diary-create-card'
import MyDiaryListItem from './my-diary-list-item'
import { connect } from 'react-redux'
import dataSource from './data-source'
import { Pagination } from 'antd'
import { loadDiaries, addDiaryWithDispatch, deleteDiaryWithDispatch, updateDiaryWithDispatch, changePageWithDispathch } from '../actions/diaries'

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

    handleUpdate = (e, text, momentDate, id) => {
        e.preventDefault()
        const date = momentDate.format('YYYY-MM-DD')
        this.props.updateDiary({ text, date, id })
    }


    handleDelete = (id) => {
        this.props.deleteDiary(id)
    }

    handlePagination = (targetPage, pageSize) => {
        this.props.changePage(targetPage, pageSize)
    }

    handlePageSizeChange = (currentPage, size) => {
        this.props.changePage(currentPage, size)
    }

    render() {
        const { diaries: { content: diaries, totalElements, number: currentPage } } = this.props
        const myDiaryList = diaries && diaries.map((log, index) => (
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
                    current={currentPage + 1}
                    total={totalElements}
                    onChange={(targetPage, pageSize) => { this.handlePagination(targetPage, pageSize) }}
                    onShowSizeChange={(current, size) => { this.handlePageSizeChange(current, size) }}
                    style={{ margin: 10 }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    diaries: state.diaries
})

const mapDispatchToProps = (dispatch) => ({
    loadDiaries: () => {
        dispatch(loadDiaries())
    },

    addDiary: (logInfo) => {
        dispatch(addDiaryWithDispatch(logInfo))
    },

    deleteDiary: (id) => {
        dispatch(deleteDiaryWithDispatch(id))
    },

    updateDiary: (logInfo) => {
        dispatch(updateDiaryWithDispatch(logInfo))
    },

    changePage: (page, pageSize) => {
        dispatch(changePageWithDispathch(page, pageSize))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MyDiary)