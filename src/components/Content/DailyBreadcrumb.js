import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'
import breadcrumbNameMapPath from './nameMapToURL'


const DailyBreadcrumb = withRouter(({ location }) => {
    const selectedSideMenuName = breadcrumbNameMapPath[location.pathname]
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>思沃学院</Breadcrumb.Item>
            <Breadcrumb.Item>成长日志</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedSideMenuName}</Breadcrumb.Item>
        </Breadcrumb>
    )
})
export default DailyBreadcrumb
