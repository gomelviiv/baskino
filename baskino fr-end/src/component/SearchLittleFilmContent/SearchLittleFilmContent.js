import React, {Component} from 'react';
import EditionButton from '../EditionButton/EditionButton';
import './SearchLittleFilmContent.css';
import searchImg from './images/search.png';

class SearchLittleFilmContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
        };
    }

    filterList = (searchQuery) => {
        if (this.props.posts.results) {
            const filteredList = this.props.posts.results.filter((post) => {
                    return (post.name.toLowerCase().search(searchQuery.toLowerCase()) !== -1);
                }
            );
            return filteredList;
        }

        return [];
    };

    handleSearchQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value,
        });
    };

    render() {

        return (
            <div>
                <div className="main-search">
                    <label>
                        <img src={searchImg} />
                        <input placeholder="Найти фильм, сериал, актера" value={this.state.searchQuery}
                               onChange={this.handleSearchQueryChange}/>
                    </label>
                    <ul>
                        {this.state.searchQuery ? this.filterList(this.state.searchQuery).map((post) => {
                            return <EditionButton post={post}/>
                        }) : " "

                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchLittleFilmContent;

