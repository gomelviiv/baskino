import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer/Footer';
import './home.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from "axios";


class Home extends Component {
  constructor(props) {
      super(props);
        this.state ={
          data: "",
        };
      }
commentChange = (e) =>{
  this.setState({
    comment: e.target.value,
  })
}
componentDidMount() {
    this.fetchPopular(this.props.match.params);
}
fetchPopular = (params)  => {
  axios(`http://localhost:4200/homepage`).then(
        response => this.setState({data: response.data})
    )
};
    render() {
        console.log(this.state.data)
        return (

          //поиск
            //find.select почитать (mongoose)
            //собираю в единый массив и тип (1фильм 2актреы 3....)
            <div className={"home-component"}>
              {this.state.data[0] ?
              <div className={"top-content"}>
                <div className={"content-top-films"}>
                  <Link to={`/movie/details/299536}`}><img src={this.state.data[0]._topfilms_thertbackground} alt=""/></Link>
                  <Link to={`/movie/details/${this.state.data[0]._topfilms_main_id}`}><img src={this.state.data[0]._topfilms_mainbackground} alt=""/></Link>
                  <Link to={`/movie/details/${this.state.data[0]._topfilms_second_id}`}><img src={this.state.data[0]._topfilms_secondbackground} alt=""/></Link>
                  <Link to={`/movie/details/${this.state.data[0]._toptvshows_second_id}}`}>{this.state.data[0]._topfilms_namethert}</Link>
                  <Link to={`/movie/details/${this.state.data[0]._topfilms_main_id}}`}>{this.state.data[0]._topfilms_namemain}</Link>
                  <Link to={`/movie/details/${this.state.data[0]._topfilms_second_id}}`}>{this.state.data[0]._topfilms_namesecond}</Link>
                </div>
                <div className={"content-top-tvshows"}>
                  <Link to={`/tv/details/${this.state.data[0]._toptvshows_thert_id}}`}><img src={this.state.data[0]._toptvshows_thertbackground}  alt=""/></Link>
                  <Link to={`/tv/details/${this.state.data[0]._toptvshows_second_id}}`}><img src={this.state.data[0]._toptvshows_secondbackground} alt=""/></Link>
                  <Link to={`/tv/details/${this.state.data[0]._toptvshows_main_id}}`}><img src={this.state.data[0]._toptvshows_mainbackground} alt=""/></Link>
                  <Link to={`/tv/details/${this.state.data[0]._toptvshows_thert_id}`}>{this.state.data[0]._toptvshows_namethert}</Link>
                  <Link to={`/tv/details/${this.state.data[0]._toptvshows_second_id}`}>{this.state.data[0]._toptvshows_namesecond }</Link>
                  <Link to={`/tv/details/${this.state.data[0]._toptvshows_main_id}`}>{this.state.data[0]._toptvshows_namemain}</Link>
                </div>
            </div>
            : ""}
             </div>
        )
    }
}

export default Home;
