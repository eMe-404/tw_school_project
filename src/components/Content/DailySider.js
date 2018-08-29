import React from 'react'
import { Icon, Layout, Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import menuItemMap from './nameMapToURL'


const { Sider } = Layout

const DailySider = withRouter(({ location }) => {

    const url = location.pathname

    return (
        <Sider width={200} style={{ background: '#fff' }}>
            <Menu
                mode="inline"
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                defaultSelectedKeys={[menuItemMap[url]]}
            >
                <Menu.Item key='我的日志' active>
                    <Link to='/practise-diaries'>我的日志</Link>
                    <Icon type="edit" style={{ marginLeft: 6 }}/>
                </Menu.Item>
                <Menu.Item key='优秀日志'>
                    <Link to='/excellent-diaries'>优秀日志</Link>
                    <Icon type="star-o" style={{ marginLeft: 6 }}/>
                </Menu.Item>

            </Menu>
        </Sider>
    )
})

export default DailySider
