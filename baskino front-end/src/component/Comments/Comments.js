import React, {Component} from 'react';
import 'react-url-query';
import axios from "axios";
import BigMovieContent from '../BigMovieContent/BigMovieContent';
import './Comments.css';
class Comments extends Component {
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
        ourRaiting: 10,
        displayComment: "",
      }
    }
    updata = () =>{
         axios.get(`http://localhost:4200/comment${this.props.post.id}`).then(
               response => this.setState({data: response.data})
           )
    }
    componentDidMount() {
      axios.get(`http://localhost:4200/comment`).then(
            response => this.setState({data: response.data})
        ).catch(function (error) {
          console.log(error);
        });

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

    renderComments = () => {
      const posts =this.state.data;

      if(posts.length > 0){
          return (posts[0].comments.map(comment => <div>
            <div className={"comment-otherName"}><b>{comment.name}</b></div>
            <div className={"comment-comment"}>{comment.comment}</div>
            <div className={"comment-date"}>{comment.date}</div>
            <div className={"comment-hr"}></div>
            <div className={"comment-ratingFromUser"}>Rating Movie:{comment.ratingFromUser}</div>
          </div>))
      }
      return null;
    }
    renderReitingOurFilm = () =>{
      const posts =this.state.data;
      if(posts.length > 0){
        return <label>{posts[0].ourRaiting}</label>
      }
      return null;
    }
    newReiting = (data) =>{
      const posts =data;
      if(posts.length > 0){
        let count = 0;
        let i=0;
        posts[0].comments.map(reiting=>{
          count+=Number(reiting.ratingFromUser);
          i++;
        })
        let g = Number((count/i).toFixed(1));
        return g;
      }
      return this.state.ratingFromUser;
    }



    commentClick =()=>{
      const localEmail = JSON.parse(localStorage.getItem(`All User`))
      console.log(this.props.post)
      this.updata();
      if(localEmail == null){
        alert("Must be logged in!")
      } else {
        let date = new Date().toISOString().
          replace(/T/, ' ').      // replace T with a space
          replace(/\..+/, '')
        let localEmail = JSON.parse(localStorage.getItem(`All User`));
        let dataCom = {
            filmName : this.props.post.title,
            id: this.props.post.id,
            ourRaiting: this.newReiting(this.state.data),
            allCommentsData : {
              email: localEmail.email,
              name: this.state.firstName,
              comment: this.state.comment,
              date: date,
              ratingFromUser: this.state.ratingFromUser,
            }
        }
        if(dataCom.allCommentsData.name.length<3 || dataCom.allCommentsData.comment.length<4 || dataCom.allCommentsData.ratingFromUser<1 || dataCom.allCommentsData.ratingFromUser>10 || isNaN(dataCom.allCommentsData.ratingFromUser)){
          alert("Data is not correct!");
        } else {
          const user =  JSON.stringify(dataCom);
          axios.post('http://localhost:4200/commenttofilm',{CommentToFilm: user})
            .then(res => {
          }).catch( error => alert(error));
        }
        this.updata();
      }
    }
    render() {

        const post = this.props.post;
        return (
            <div className="comment-about-film">
                <div className={"comment-h3"}><h1>Comments to the FILM</h1></div>
                <div className={"comment-name"}><input placeholder="Your Name: " onChange={(e) => {this.handleInput('firstName', e.target.value)}}  type="text"/></div>
                <div className={"comment-rating"}><input placeholder="Raiting: (from 1 to 10)" onChange={(e) => {this.handleInput('ratingFromUser', e.target.value)}}  type="text"/></div>
                <div className={"comment-text"}><input placeholder='Your comment: ' onChange={(e) => {this.handleInput('comment', e.target.value)}} /></div>
                <div className={"comment-send"}><button className={"send-comment"} onClick={this.commentClick}>Send Comment</button></div>
                <div className={"comment-otherCom"}>
                  {this.renderComments()}
                </div>
          </div>
        )
    }
}

export default Comments;
