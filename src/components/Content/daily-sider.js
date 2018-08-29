import React from 'react'
import { Icon, Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import urlMapToName from './url-map-name'


const DailySider = withRouter(({ location }) => {

    const url = location.pathname

    return (
        <Menu
            mode="inline"
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            defaultSelectedKeys={[urlMapToName[url]]}
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
    )
})

export default DailySider
