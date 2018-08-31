import React from 'react'
import { Col, Icon, Row } from 'antd'
import UserDropDown from './user-drop-down'
import logo from './images/logo-white.763050c9.png'

const PageHeader = () => {
    return (
        <Row>
            <Col span={6}>
                <img
                    src={logo}
                    alt="Thoughtworks.school"
                    className="logo"
                />
            </Col>
            <Col span={2} offset={12}>
                <UserDropDown/>
            </Col>
            <Col span={1} style={{ marginLeft: 5, textAlign: 'right' }}>
                <Icon
                    type="bell"
                    style={{ color: 'white', fontSize: 20, paddingLeft: 10, marginTop: 26 }}
                />
            </Col>
        </Row>
    )
}

export default PageHeader
