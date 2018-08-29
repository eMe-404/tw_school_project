import React, { Component } from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import DailyHeader from './components/Header/daily-header'
import DailyFooter from './components/Footer/daily-footer'
import { Layout } from 'antd'
import DailyBreadcrumb from './components/Content/daily-breadcrumb'
import DailySider from './components/Content/daily-sider'
import ExcellentLog from './components/Content/excellent-log'
import MyLog from './components/Content/my-log'

const { Header, Content, Footer, Sider } = Layout

class App extends Component {
    render () {
        return (
            <HashRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header className="App-header">
                        <DailyHeader/>
                    </Header>
                    <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column', flexGrow: 0 }}>
                        <DailyBreadcrumb/>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <DailySider/>
                            </Sider>
                            <Content style={{ padding: '0 24px' }}>
                                <Switch>
                                    <Route exact path='/' component={MyLog}/>
                                    <Route path='/practise-diaries' component={MyLog}/>
                                    <Route path='/excellent-diaries' component={ExcellentLog}/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <DailyFooter/>
                    </Footer>
                </Layout>
            </HashRouter>
        )
    }
}

export default App
