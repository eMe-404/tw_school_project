import React, { Component } from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const TextArea = Input.TextArea
const template = '## 我做了什\n## 学了什么\n## 有什么印象深刻的收获'

class MyLogCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            date: this.props.createLog ? moment() : this.props.date,
            textArea: this.props.createLog ? template : this.props.content
        }
    }

    handleTextAreaChange (event) {
        this.setState({
            textArea: event.target.value
        })
    }

    handleDatePickerChange (date) {
        this.setState({
            date: date
        })
    }

    render () {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        }

        const dateFormat = 'YYYY/MM/DD'
        const handleSubmit = this.props.handleSubmit
        return (
            <Form onSubmit={
                this.props.createLog ?
                    (e) => handleSubmit(e, this.state.textArea, this.state.date) :
                    (e) => handleSubmit(e, this.state.textArea, this.state.date, this.props.logId)
            }>
                <FormItem
                    {...formItemLayout}
                    label="日期"
                >
                    <DatePicker
                        value={this.state.date} format={dateFormat}
                        onChange={(date) => this.handleDatePickerChange(date)}
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="总结的内容"
                >
                    <TextArea
                        style={{ height: 100 }}
                        value={this.state.textArea}
                        onChange={(e) => this.handleTextAreaChange(e)}
                    />
                </FormItem>
                <FormItem
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="button-note"
                        ghost
                        size="small"
                    >提交</Button>
                    <Button
                        className="button-note"
                        size="small"
                        htmlType="button"
                        onClick={this.props.handleUpdateCancel}
                    >取消
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default MyLogCreateForm
