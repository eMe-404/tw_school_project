import React from 'react'
import { Layout } from 'antd'
import DailySider from './DailySider'
import DailyLog from './DailyLog'
import ExcellentLog from './ExcellentLog'
import Route from 'react-router-dom/es/Route'

const DailyDetails = () => {
    return (
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <DailySider/>
            <Route exact path='/' component={DailyLog}/>
            <Route path='/practise-diaries' component={DailyLog}/>
            <Route path='/excellent-diaries' component={ExcellentLog}/>
        </Layout>
    )
}

export default DailyDetails
