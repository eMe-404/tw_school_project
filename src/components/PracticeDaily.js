import React from 'react'
import { Layout } from 'antd'
import DailyHeader from './Header/DailyHeader'
import DailyFooter from './Footer/DailyFooter'
import DailyContent from './Content/DailyContent'

const PracticeDaily = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <DailyHeader/>
            <DailyContent/>
            <DailyFooter/>
        </Layout>
    )
}

export default PracticeDaily