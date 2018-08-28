import React from 'react'
import { Icon, Menu, Layout } from 'antd'

const { Sider } = Layout

const DailySider = ({ handleSideMenuClick }) => {
    return (
        <Sider width={200} style={{ background: '#fff' }}>
            <Menu
                mode="inline"
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                defaultSelectedKeys={['我的日志']}
                onClick={(event) => {
                    handleSideMenuClick(event)
                }}
            >
                <Menu.Item key='我的日志'>我的日志
                    <Icon type="edit" style={{ marginLeft: 6 }}/>
                </Menu.Item>
                <Menu.Item key='优秀日志'>优秀日志
                    <Icon type="star-o" style={{ marginLeft: 6 }}/>
                </Menu.Item>

            </Menu>
        </Sider>
    )
}

export default DailySider
