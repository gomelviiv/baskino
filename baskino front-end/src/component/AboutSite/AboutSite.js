import React, {Component} from 'react';
import Header from '../Header';
import './AboutSite.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from "axios";


class AboutSite extends Component {
  constructor(props) {
      super(props);
        this.state ={
          data: "",
        };
      }
      componentDidMount() {
          this.fetchPopular(this.props.match.params);
      }
      fetchPopular = (params)  => {
          fetch(`http://localhost:4200/aboutsite`).then(function (response) {
              return response.json();
          }).then(myJson => this.setState({data: myJson}))
      };
    render() {
        return (
            <div className={"аboutSite-content"}>
              <div className={"about"}>
                  <div className={"about-background"}></div>
                  <div className={"about-h1"}>Онлайн кинотеатр GoVi</div>
                  <div className={"about-text"}> We are the largest online cinema in Belarus, operating on the market of legal professional video content. Our mission is to discover the world of cinema in all its diversity for people</div>
                  <div className={"about-partners-h1"}>Partners</div>
                  <div className={"about-partners-text"}>The catalogs of the leading Hollywood major studios and the latest film distribution are available for viewing as part of a monthly subscription to ivi or with payment for access to a particular film</div>
                  <div className={"about-advertising-agencies-h1"}>Advertising agencies</div>
                  <div className={"about-advertising-agencies-text"}>To the main part of the catalog of films, cartoons and serials was free for viewers, we cooperate with our partners - advertising agencies</div>
              </div>
            </div>
        )
    }
}

export default AboutSite;
