import React, { Component } from 'react'
import { Button, Card, Icon, message, Popconfirm } from 'antd'
import ReactMarkdown from 'react-markdown'
import MyLogCreateForm from './my-log-create-form'
import { connect } from 'react-redux'


class MyLogDisplay extends Component {

    constructor (props) {
        super(props)
        this.state = {
            displayCardHidden: false
        }
    }

    confirm = () => {
        const { handleDelete, logId } = this.props
        handleDelete(logId)
        message.success('删除成功')
    }

    cancel = () => {
        message.error('取消删除')
    }

    handleUpdate = () => {
        this.setState({
            displayCardHidden: true
        })
    }

    handleUpdateCancel = () => {
        this.setState({
            displayCardHidden: false
        })
    }

    handleSubmit = (e, content, date, logId) => {
        e.preventDefault()

        this.props.updateLog({ content, date, logId })
        this.setState({
            displayCardHidden: false
        })
    }

    render () {
        const { date, content, logId } = this.props
        return (
            <div>
                <Card
                    className={this.state.displayCardHidden && 'hide'}
                    title={date.format('YYYY-MM-DD') + '的日志'}
                    extra={
                        <Popconfirm
                            title="确定删除吗?"
                            onConfirm={this.confirm}
                            onCancel={this.cancel}
                            okText="确定"
                            cancelText="取消">
                            <Icon type="close"/>
                        </Popconfirm>
                    }
                    style={{ width: '100%' }}
                >
                    <ReactMarkdown source={content} className='mark-down-wrap'/>

                    <div style={{ float: 'right' }}>
                        <Button
                            type="primary"
                            className="button-note"
                            size="small"
                            htmlType="button"
                            ghost
                            onClick={this.handleUpdate}
                        >修改日志
                        </Button>
                        <Button
                            type="primary"
                            className="button-note"
                            size="small"
                            htmlType="button"
                            ghost
                        >评论日志
                        </Button>
                    </div>
                </Card>
                <Card
                    title="修改成长日志"
                    style={{ width: '100%' }}
                    className={!this.state.displayCardHidden && 'hide'}
                >
                    <MyLogCreateForm
                        createLog={false}
                        content={content}
                        date={date}
                        logId={logId}
                        handleUpdateCancel={this.handleUpdateCancel}
                        handleSubmit={this.handleSubmit}

                    />
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    displayCardHidden: state.displayCardHidden
})

const mapDispatchToProps = (dispatch) => ({
    updateLog: (logInfo) => {
        dispatch({
            type: 'UPDATE_LOG',
            data: logInfo
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyLogDisplay)
