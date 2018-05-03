// import React, { Component } from "react";
//
// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: "",
//             data: "",
//         };
//     }
//
//     componentDidMount() {
//         fetch(`https://api.themoviedb.org/3/tv/popular?language=ru-ru&api_key=b732d95555e47a38bc32353240a46083`).then(function (response) {
//             return response.json();
//         }).then(myJson => this.setState({data: myJson}))
//     }
//
//
//
//     render() {
//         return (
//             <div>
//                 {console.log(this.state.data.page)}
//                 {/*{console.log(typeof (this.state.data.page))}*/}
//                 {/*<div className="little-serial-main-content">*/}
//                     {/*<p>Популярные сериалы</p>*/}
//                     {/*<div className="d">*/}
//                         {/*<SearchLittleFilmContent posts={this.state.data}/>*/}
//                     {/*</div>*/}
//                     {/*<div className="little-serial-container">*/}
//                         {/*{this.state.data ? this.state.data.results.map((post) =>*/}
//                             {/*<div className="little-serial-margin">*/}
//                                 {/*<MiniSerial post={post}/>*/}
//                             {/*</div>*/}
//
//                         {/*) : ""*/}
//                         {/*}*/}
//                     {/*</div>*/}
//                 {/*</div>*/}
//                 {/*<Link to={`/tv/${this.state.data.page + 1}`}>*/}
//                     {/*<label>Next Page</label>*/}
//                 {/*</Link>*/}
//                 {/*/!*<p> {JSON.stringify(this.state.data)}</p> все данные*!/*/}
//             </div>
//         )
//     }
//
// }
// export default Test