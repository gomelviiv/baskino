import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './EditionButton.css'
class EditionButton extends Component {


    render() {
        const post = this.props.post;
        return (
            <div className={'point-menu'}>
                <li>
                    <Link to={`/tv/details/${post.id}`}>{post.name}</Link>
                    <hr/>
                </li>
            </div>
        )
    }
}

export default EditionButton;

