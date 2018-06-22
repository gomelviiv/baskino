import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MiniSerialContent from './component/MiniSerialContent/MiniSerialContent';
import MiniMovieContent from './component/MiniMovieContent/MiniMovieContent';
import BigSerialContent from './component/BigSerialContent/BigSerialContent';
import BigMovieContent from './component/BigMovieContent/BigMovieContent';
import Registration from './component/RegistrationContent/RegistrationContent';
import Actors from './component/ActorsContent/ActorsContent';
import Login from './component/LoginContent/LoginContent';
import AboutSite from './component/AboutSite/AboutSite';
import TermsOfUse from './component/TermsOfUse/TermsOfUse';
import RulesInSite from './component/RulesInSite/RulesInSite';
import AddSerial_Films from './component/AddSerial_Films/AddSerial_Films';
import Home from './component/Home'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import './rendeer.css'
class App extends Component {
    render() {
        return (
              <BrowserRouter>
                  <div className={"rendeer"}>
                    <div className={"wrapper"}>
                      <div className={"header"}><Header/></div>
                      <div className={"contents"}>
                      <Route exact path="/" component={Home}/>
                      <Route path="/tv/popular/:page" component={MiniSerialContent}/>
                      <Route path="/tv/details/:id" component={BigSerialContent}/>
                      <Route path="/movie/popular/:page" component={MiniMovieContent}/>
                      <Route path="/movie/details/:id" component={BigMovieContent}/>
                      <Route path="/registration" component={Registration}/>
                      <Route path="/actors" component={Actors}/>
                      <Route path="/login" component={Login}/>
                      <Route path="/aboutsite" component={AboutSite}/>
                      <Route path="/termsofuse" component={TermsOfUse}/>
                      <Route path="/rulesinsite" component={RulesInSite}/>
                      <Route path="/addserial_films" component={AddSerial_Films}/>
                      </div>
                    </div>
                    <div className={"footer"}><Footer/></div>
                  </div>
              </BrowserRouter>
        )
    }
}

export default App;
