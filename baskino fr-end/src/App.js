import React, {Component} from 'react';
import MiniSerialContent from './component/MiniSerialContent/MiniSerialContent';
import {BrowserRouter, Route} from 'react-router-dom';
import BigSerialContent from './component/BigSerialContent/BigSerialContent';
import Home from './component/Home'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/tv/popular/:page" component={MiniSerialContent}/>
                    <Route path="/tv/details/:id" component={BigSerialContent}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;