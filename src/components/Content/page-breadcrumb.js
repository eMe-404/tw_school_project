import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'
import urlMapToName from './url-map-name'


const PageBreadcrumb = withRouter(({ location }) => {
    const selectedBreadcrumbName = urlMapToName[location.pathname]
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>思沃学院</Breadcrumb.Item>
            <Breadcrumb.Item>成长日志</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedBreadcrumbName}</Breadcrumb.Item>
        </Breadcrumb>
    )
})
export default PageBreadcrumb
