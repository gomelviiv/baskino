import React, {Component} from 'react'
import './MiniMovie.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';


class MiniMovie extends Component {
    handleImg = (src) => {
        return "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + src;
    };
    handleOverview = (overview) =>{
        let str ="";
        for(let i=0; i<overview.length; i++){
            if(str.length<120) {
                str += overview[i]
            } else {
                return str + "..."
            }
        }
    };
    render() {
        const post = this.props.post;
        return (
          <div className="mini-Movie">
            <div className={"mini-Movie-poster"}>
              <img src={this.handleImg(post.poster_path)}/>
            </div>
            <div className={"mini-Movie-name"}>
              {post.title}
            </div>
            <div className={"mini-Movie-overview"}>
              {this.handleOverview(post.overview)}
            </div>
            <div className={"mini-Movie-hr"}>
             <hr/>
             </div>
             <div className={"mini-Movie-Divbutton"}>
              <Link  className={"mini-Movie-button"} to={`/movie/details/${post.id}`}>
                Подробнее
              </Link>
             </div>
          </div>
        )
    }


}

export default MiniMovie;
