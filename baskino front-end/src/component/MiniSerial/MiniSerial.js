import React, {Component} from 'react'
import './MiniSerial.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';


class MiniSerial extends Component {
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
          <div className="mini-serial">
            <div className={"mini-serial-poster"}>
              <img src={this.handleImg(post.poster_path)}/>
            </div>
            <div className={"mini-serial-name"}>
              {post.name}
            </div>
            <div className={"mini-serial-overview"}>
              {this.handleOverview(post.overview)}
            </div>
            <div className={"mini-serial-hr"}>
             <hr/>
             </div>
             <div className={"mini-serial-Divbutton"}>
              <Link  className={"mini-serial-button"} to={`/tv/details/${post.id}`}>
                Подробнее
              </Link>
             </div>
          </div>
        )
    }


}

export default MiniSerial;
