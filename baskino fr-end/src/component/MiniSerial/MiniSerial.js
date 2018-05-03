import React, {Component} from 'react'
import '../../style/style.css'
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
            <div>
                <div className="little-serial">
                    <div className="little-serial-img">
                        <img src={this.handleImg(post.poster_path)}/>
                    </div>
                    <div className="little-serial-flex-content">
                        <p className="little-serial-title">
                            {post.name}
                        </p>
                        <p className="little-serial-description">

                            {this.handleOverview(post.overview)}
                        </p>
                        <hr/>
                        <div className="little-serial-more-info-div">
                            <Link className="little-serial-more-info" to={`/tv/details/${post.id}`}>
                                Подробнее
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default MiniSerial;
