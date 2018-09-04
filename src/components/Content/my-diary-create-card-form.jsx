import React, { Component } from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const TextArea = Input.TextArea

class MyDiaryCreateCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: this.props.date,
            text: this.props.text
        }
    }



    handleTextAreaChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleDatePickerChange(date) {
        this.setState({
            date: date
        })
    }

    handleUpdateCancel() {
        this.setState({
            date: this.props.date,
            text: this.props.text
        })

        this.props.handleUpdateCancel()
    }

    render() {
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
                this.props.isCreate ?
                    (e) => handleSubmit(e, this.state.text, this.state.date) :
                    (e) => handleSubmit(e, this.state.text, this.state.date, this.props.id)
            }
            key={this.props.id}
            >
                <FormItem
                    {...formItemLayout}
                    label="日期"
                >
                    <DatePicker
                        value={moment(this.state.date)} format={dateFormat}
                        onChange={(date) => this.handleDatePickerChange(date)}
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="总结的内容"
                >
                    <TextArea
                        style={{ height: 100 }}
                        value={this.state.text}
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
                        onClick={() => this.handleUpdateCancel()}
                    >取消
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default MyDiaryCreateCardForm
