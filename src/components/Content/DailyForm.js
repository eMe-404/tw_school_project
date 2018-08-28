import React, { Component } from "react";
import { Form, DatePicker, Input, Button } from "antd";

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class DailyForm extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const textAreaTemplate = `## 我做了什么
## 学了什么
## 有什么印象深刻的收获`;
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="日期"
                >
                    {getFieldDecorator('date-picker', config)(
                        <DatePicker/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="总结的内容"
                >
                    <TextArea style={{ height: 100 }}>{textAreaTemplate}</TextArea>
                </FormItem>
                <FormItem
                    style={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <Button type="primary"
                            className="button-note"
                            ghost
                            size="small"
                    >提交</Button>
                    <Button className="button-note"
                            size="small"
                    >取消</Button>
                </FormItem>
            </Form>
        )
    }

}

DailyForm = Form.create({})(DailyForm);
export default DailyForm;