import React, {Component} from "react";
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Row, Col} from 'antd';

import UserDropDown from "./UserDropDown";

const { SubMenu } = Menu;
const {Header, Content, Footer, Sider} = Layout;


class PracticeDaily extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSideMenuName: "我的日志"
        }
    }

    handleSideMenuClick = (event) => {
        this.setState({
            selectedSideMenuName: event.key
        })
    };

    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Header className="header">
                    <Row>
                        <Col span={8}>
                            <div className="logo"/>
                        </Col>
                        <Col span={2} offset={10}>
                            <UserDropDown/>
                        </Col>
                        <Col span={2}>
                            <Icon type="bell" style={{color: 'white', fontSize: 20, paddingLeft: '10px'}}/>
                        </Col>
                    </Row>
                </Header>
                <Content style={{padding: '0 50px', display: 'flex', flexDirection: 'column'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>思沃学院</Breadcrumb.Item>
                        <Breadcrumb.Item>成长日志</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.selectedSideMenuName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                                defaultSelectedKeys={['我的日志']}
                                onClick={(event) => {
                                    this.handleSideMenuClick(event)
                                }}
                            >
                                <Menu.Item key='我的日志'>我的日志
                                    <Icon type="edit" style={{marginLeft: 6}}/>
                                </Menu.Item>
                                <Menu.Item key='优秀日志'>优秀日志
                                    <Icon type="star-o" style={{marginLeft: 6}}/>
                                </Menu.Item>

                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px'}}>
                            Content
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

export default PracticeDaily;