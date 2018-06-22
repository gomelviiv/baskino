import React, {Component} from 'react';
import './Footer.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from "axios";


class Footer extends Component {
  constructor(props) {
      super(props);
        this.state ={
          data: "",
        };
      }
    render() {
      return(
            <footer className={"footer-content"}>
              <div>
                <h3>MAIN</h3>
                  <Link to={"/AboutSite"}>About the site</Link>
              </div>
              <div>
                <h3>PARTICIPATE</h3>
                  <Link to={"/addserial_films"}>Add Movie</Link>
                  <Link to={"/addserial_films"}>Add TvShows</Link>
              </div>
              <div>
                <h3>COMMUNITY</h3>
                  <Link to={"/rulesinsite"}>Rules</Link>
                  <Link to={"https://twitter.com/gomelviiv"}>Twitter</Link>
                  <Link to={`http://vk.com/gomelviiv`}>Vk</Link>
              </div>
              <div>
                <h3>LEGAL INFORMATION</h3>
                  <Link to={"/termsofuse"}>Terms of Use</Link>
              </div>
            </footer>

        )
    }
}

export default Footer;
