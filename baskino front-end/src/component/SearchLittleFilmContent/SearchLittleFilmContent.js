import React, {Component} from 'react';
import EditionButton from '../EditionButton/EditionButton';
import './SearchLittleFilmContent.css';
import searchImg from './images/search.png';
import axios from "axios";

class SearchLittleFilmContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            searchResult: "",
        };
    }

    // sort = name => name.toLowerCase().search(this.props.searchQuery.toLowerCase()) !== -1;
    //
    // filterList = (searchQuery) => {
    //   console.log(this.props.posts)
    //     if (this.props.posts) {
    //           const filteredList = this.props.posts.filter((post) => {
    //             if(post.name) {
    //               return (this.sort(post.name));
    //             }
    //             if(post.title){
    //               return (this.sort(post.title));
    //             }
    //           }
    //         );
    //         return filteredList;
    //     }
    //
    //     return [];
    // };
    handleSearchQueryChange = (key,value) => {
        this.setState({
          [key]: value,
        })
    };
    sendSerch = () =>{
      let serchElement = {searchQuery:this.state.searchQuery}
      const serch =  JSON.stringify(serchElement);
      axios.post('http://localhost:4200/searching',{Serch: serch})
        .then(res => {
          if(res.data.length > 0){
            this.setState({searchResult: res.data})
          } else {
            alert('No results were found for this search');
          }

      }).catch( error => alert(error));
    }

    render() {
     return (
      <div className="main-search">
        <div>
        <input placeholder="Search: " onChange={(e) => {this.handleSearchQueryChange('searchQuery', e.target.value)}}  type="text"/>

        <button onClick={this.sendSerch}> Search</button>
        </div>
        <div>
          <ul>
            {this.state.searchResult ? <EditionButton post={this.state.searchResult}/> : " "}
            {/*this.state.searchQuery ? this.filterList(this.state.searchQuery).map((post) => {
                return <EditionButton post={post}/>
              }) : " "
            */}
          </ul>
        </div>
      </div>
     )
    }
}

export default SearchLittleFilmContent;
