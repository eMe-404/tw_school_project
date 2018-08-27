import React from "react";
import { Row, Col, Icon } from "antd";
import {Layout} from 'antd';
import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
    <Layout.Header className="header">
      <Row>
        <Col span={8}>
          <div className="logo" />
        </Col>
        <Col span={2} offset={10}>
          <UserDropDown />
        </Col>
        <Col span={2}>
          <Icon
            type="bell"
            style={{ color: "white", fontSize: 20, paddingLeft: "10px" }}
          />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
