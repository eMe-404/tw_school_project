import React, { Component } from 'react'
import './App.css'
import PracticeDaily from './components/PracticeDaily'
import { HashRouter } from 'react-router-dom'


class App extends Component {
    render () {
        return (
            <HashRouter>
                <PracticeDaily/>
            </HashRouter>
        )
    }
}

export default App
