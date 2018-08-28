import React from 'react'
import { Menu, Dropdown, Button, Icon, message } from 'antd'

const UserDropDown = () => {
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1"><Icon type="user"/>个人中心</Menu.Item>
            <Menu.Item key="2"><Icon type="close"/>退出</Menu.Item>
        </Menu>
    )

    function handleMenuClick (e) {
        message.info('Click on menu item.')
    }

    return (
        <div>
            <Dropdown overlay={menu} style={{ float: 'right' }}>
                <Button style={{ marginTop: 20, float: 'right' }}>
                    李素 <Icon type='down'/>
                </Button>
            </Dropdown>
        </div>
    )
}

export default UserDropDown
