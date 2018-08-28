import React, { Component } from 'react'
import { Layout } from 'antd'
import DailyBreadcrumb from './DailyBreadcrumb'
import DailyDetails from './DailyDetails'

const { Content } = Layout

class DailyContent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            selectedSideMenuName: '我的日志'
        }
    }

    handleSideMenuClick = (event) => {
        this.setState({
            selectedSideMenuName: event.key
        })
    }


    render () {
        return (
            <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column', flexGrow: 0 }}>
                <DailyBreadcrumb selectedSideMenuName={this.state.selectedSideMenuName}/>
                <DailyDetails handleSideMenuClick={this.handleSideMenuClick}/>
            </Content>
        )
    }
}

export default DailyContent