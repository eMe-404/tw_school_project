import React from "react";
import { Breadcrumb } from "antd";

const DailyBreadcrumb = ({ selectedSideMenuName }) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>思沃学院</Breadcrumb.Item>
            <Breadcrumb.Item>成长日志</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedSideMenuName}</Breadcrumb.Item>
        </Breadcrumb>
    )
};
export default DailyBreadcrumb;