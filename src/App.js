import React, { Component } from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import PageHeader from './components/Header/page-header'
import PageFooter from './components/Footer/page-footer'
import { Layout } from 'antd'
import PageBreadcrumb from './components/Content/page-breadcrumb'
import PageSider from './components/Content/page-sider'
import ExcellentDiary from './components/Content/excellent-diary'
import MyLog from './components/Content/my-diary'

const { Header, Content, Footer, Sider } = Layout

class App extends Component {
    render () {
        return (
            <HashRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header className="App-header">
                        <PageHeader/>
                    </Header>
                    <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column', flexGrow: 0 }}>
                        <PageBreadcrumb/>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <PageSider/>
                            </Sider>
                            <Content style={{ padding: '0 24px' }}>
                                <Switch>
                                    <Route exact path='/' component={MyLog}/>
                                    <Route path='/practise-diaries' component={MyLog}/>
                                    <Route path='/excellent-diaries' component={ExcellentDiary}/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <PageFooter/>
                    </Footer>
                </Layout>
            </HashRouter>
        )
    }
}

export default App
