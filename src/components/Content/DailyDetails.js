import React from 'react'
import { Layout } from 'antd'
import DailySider from './DailySider'
import DailyLog from './DailyLog'
import ExcellentLog from './ExcellentLog'
import Route from 'react-router-dom/es/Route'

const DailyDetails = ({ handleSideMenuClick }) => {
    return (
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <DailySider handleSideMenuClick={handleSideMenuClick}/>
            <Route exact path='/practise-diaries' component={DailyLog}/>
            <Route path='/excellent-diaries' component={ExcellentLog}/>
        </Layout>
    )
}

export default DailyDetails
