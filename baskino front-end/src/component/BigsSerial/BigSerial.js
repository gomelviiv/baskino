import React, {Component} from 'react';
import 'react-url-query';
import axios from "axios";
import Comments from '../Comments/Comments';

import './BigSerial.css';
class BigSerial extends Component {
  constructor(props){
    super(props);
    this.state= {
      firstName: "",
      comment: "",
      nameFilm: "",
      data: [],
      allCommentsData: [],
      profil: {},
      ratingFromUser: "",
      ourRaiting: "",
      displayComment: "",
    }
  }
    handleImg = (src) => {
        return ("https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + src)
    };
    handleBackgroundImg = (src) => {
        return ("https://image.tmdb.org/t/p/w1400_and_h450_face/" + src)
    };
    handleOverview = (overview) => {
        return overview.split(/[\\n]/g).map((str) => {
            return <p>{str}<br/></p>
        })
    };
    updata = () =>{
         axios.get(`http://localhost:4200/comment${this.props.post.id}`).then(
               response => this.setState({data: response.data})
           )
    }
    componentDidMount() {
      axios.get(`http://localhost:4200/comment${this.props.post.id}`).then(
            response => this.setState({data: response.data})
        ).catch(function (error) {
          console.log(error);
        });
    }




    handleInput = (key, value) =>{
      this.setState({
        [key]: value,
      })
    }

    newReiting = (data) =>{
          const posts =data;
          console.log(posts)
          if(posts[0] !== undefined){
            if(posts[0].ourRaiting !== ""){
              let count = 0;
              let i=0;
              posts[0].comments.map(reiting=>{
                count+=Number(reiting.ratingFromUser);
                i++;
              })
              let g = Number((count/i).toFixed(1));
              return(g)
            } else {
              return this.state.ratingFromUser;
            }
          } else{
            return 10;
          }
      }
    render() {
        const post = this.props.post;
        const divStyle = {

            backgroundImage: 'url(' + this.handleBackgroundImg(post.backdrop_path) + ')',
        };
        console.log( post.first_air_date )
        return (
            <div className="concrete-content">
              <div className={"concrete-opacity"}></div>
              <div className="concrete-backgroundImage" style={divStyle}></div>

                <div key={post.id}></div>
                  <div className={"concrete-poster"}>
                    <img src={this.handleImg(post.poster_path)}/>
                  </div>
                  <div className={"concrete-name-tvshows"}>
                      {post.name}
                      <label >{"   (Reiting in our konopoisk:" + '7' + ")"} </label>
                      {this.state.data ? <label>(Reiting in our sait: {this.newReiting(this.state.data)} )</label> : "" }
                  </div>
                  <div>
                    Обзор:
                  </div>
                  <div className={"concrete-overview"}>
                    {this.handleOverview(post.overview)}
                  </div>
                  <div className="comment-about">
                    <Comments post={post}/>
                </div>
            </div>
        )
    }
}

export default BigSerial;
