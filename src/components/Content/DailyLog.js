import React, { Component } from "react";
import { Layout } from "antd";
import NewLog from "./NewLog";

const { Content } = Layout;


class DailyLog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
            };
            console.log('Received values of form: ', values);
        });
    };


    render() {
        return (
            <Content style={{ padding: '0 24px' }}>
                <NewLog handleSubmit={this.handleSubmit}/>
            </Content>
        )
    }
}

export default DailyLog;