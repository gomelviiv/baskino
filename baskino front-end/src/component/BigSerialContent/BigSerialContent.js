import React, {Component} from 'react'
import BigSerial from '../BigsSerial/BigSerial';
import Header from '../Header/Header';

// import '../../style/style.css'
import './BigSerialContent.css'

class BigSerialContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?language=ru-ru&api_key=b732d95555e47a38bc32353240a46083`).then(function (response) {
            return response.json();
        }).then(myJson => this.setState({data: myJson}));
    }

    render() {
        return (
          <div className="main-content">
                  {this.state.data ? (
                          <BigSerial post={this.state.data}/>
                    ) : ""
                    }
          </div>
        )
    }


}

export default BigSerialContent;
