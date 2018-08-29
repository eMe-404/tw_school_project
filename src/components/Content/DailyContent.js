import React from 'react'
import { Layout } from 'antd'
import DailyBreadcrumb from './DailyBreadcrumb'
import DailyDetails from './DailyDetails'

const { Content } = Layout

const DailyContent = () => {
    return (
        <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column', flexGrow: 0 }}>
            <DailyBreadcrumb/>
            <DailyDetails/>
        </Content>
    )
}

export default DailyContent