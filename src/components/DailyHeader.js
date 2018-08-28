import React from "react";
import {Row, Col, Icon} from "antd";
import {Layout} from "antd";
import UserDropDown from "./UserDropDown";
import logo from "../media/logo-white.763050c9.png"

const {Header} = Layout;

const DailyHeader = () => {
    return (
        <Header className="App-header">
            <Row>
                <Col span={6}>
                    <img src={logo}
                         alt="Thoughtworks.school"
                         className="logo"
                    />
                </Col>
                <Col span={2} offset={12}>
                    <UserDropDown/>
                </Col>
                <Col span={1} style={{marginLeft: 5, textAlign: "right"}}>
                    <Icon
                        type="bell"
                        style={{color: "white", fontSize: 20, paddingLeft: 10, marginTop: 26}}
                    />
                </Col>
            </Row>
        </Header>
    );
};

export default DailyHeader;
