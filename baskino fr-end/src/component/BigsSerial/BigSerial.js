import React, {Component} from 'react';
import 'react-url-query';


class BigSerial extends Component {

    handleImg = (src) => {
        return ("https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + src)
    };
    handleBackgroundImg = (src) => {
        return ("https://image.tmdb.org/t/p/w1400_and_h450_face/" + src)
    };
    handleOverview = (overview) => {
        return overview.split(/[\\n]/g).map((str) => {
            console.log(str) ;
            return <p>{str}<br/></p>
        })
    };




    render() {
        const post = this.props.post;
        const divStyle = {

            backgroundImage: 'url(' + this.handleBackgroundImg(post.backdrop_path) + ')',
        };
        return (
            <div>
                <div className="big-serial-main-content" style={divStyle}>
                    <div className="big-serial" key={post.id}>
                        <div className="big-serial-poster">
                            <img className="big-serial-img" src={this.handleImg(post.poster_path)}/>
                        </div>

                        <div className="big-serial-flex-content">
                            <p className="big-serial-title">
                                {post.name}
                                <label className="big-serial-first-data">{"   (" + post.first_air_date + ")"}</label>
                            </p>

                            <p className="big-serial-overview">
                                Обзор:
                            </p>
                            <div className="big-serial-description">
                                {this.handleOverview(post.overview)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigSerial;

