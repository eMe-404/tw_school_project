import React from 'react'
import { Layout } from 'antd'
import DailySider from './DailySider'
import DailyLog from './DailyLog'

const DailyDetails = ({ handleSideMenuClick }) => {
    return (
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <DailySider handleSideMenuClick={handleSideMenuClick}/>
            <DailyLog/>
        </Layout>
    )
}

export default DailyDetails
