import React, { Component } from 'react'
import { Button, Card, Icon, message, Popconfirm } from 'antd'
import ReactMarkdown from 'react-markdown'
import MyDiaryCreateCardForm from './my-diary-create-card-form'


class MyDiaryListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }

    confirm = () => {
        const { handleDelete, id } = this.props
        handleDelete(id)
        message.success('删除成功')
    }

    cancel = () => {
        message.error('取消删除')
    }

    handleUpdate = () => {
        this.setState({
            isEditing: true
        })
    }

    handleUpdateCancel = () => {
        this.setState({
            isEditing: false
        })
    }

    handleUpdateSubmit = (e, text, date, id) => {
        this.props.handleUpdate(e, text, date, id)
        this.setState({
            isEditing: false
        })
    }

    render() {
        const { date, text, id } = this.props
        return (
            <div>
                <Card
                    className={this.state.isEditing && 'hide'}
                    title={date + '的日志'}
                    extra={
                        <Popconfirm
                            title="确定删除吗?"
                            onConfirm={this.confirm}
                            onCancel={this.cancel}
                            okText="确定"
                            cancelText="取消">
                            <Icon type="close" />
                        </Popconfirm>
                    }
                    style={{ width: '100%' }}
                >
                    <ReactMarkdown source={text} className='mark-down-wrap' />

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
                    className={!this.state.isEditing && 'hide'}
                >
                    <MyDiaryCreateCardForm
                        isCreate={false}
                        text={text}
                        date={date}
                        id={id}
                        handleUpdateCancel={this.handleUpdateCancel}
                        handleSubmit={this.handleUpdateSubmit}

                    />
                </Card>
            </div>
        )
    }
}

export default MyDiaryListItem
