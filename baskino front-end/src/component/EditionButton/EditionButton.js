import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './EditionButton.css'
class EditionButton extends Component {
    renderVariant = (post) =>{
      console.log(post)
      if(post == undefined){
        return(alert("Nothing found"));
      }
      if(post.type === "TvShows"){
        return( <Link to={`/tv/details/${post.id}`}>{post.name}</Link>)
      }
      if(post.type === "Movie"){
        return( <Link to={`/movie/details/${post.id}`}>{post.name}</Link>)
      }
    }
    render() {
        const post = this.props.post[0];
        console.log('--------')
        return (
            <div className={'point-menu'} >
                <li>
                    {this.renderVariant(post)}
                    <hr/>
                </li>
            </div>
        )
    }
}

export default EditionButton;
