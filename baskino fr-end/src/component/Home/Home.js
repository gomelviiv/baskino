import React, {Component} from 'react'
import Header from '../Header'
import './home.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';


class Home extends Component {
  constructor(props) {
      super(props);
        this.state ={
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          againPassord: "",
        };
      }


    // componentDidMount() {
    //     fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?language=ru-ru&api_key=b732d95555e47a38bc32353240a46083`).then(function (response) {
    //         return response.json();
    //     }).then(myJson => this.setState({data: myJson}));
    // }
    //СДЕЛАТЬ ОДНОЙ ФУНКЦИЕЙ
    //НАДПИСЬ ЗАПАЗДЫВАЕТ НА 1-о действие
    //СДЕЛАТЬ ПЕРЕВОРОТ СТРАНИЦ В ИГРЕ
    //ОТПРАВИТЬ ДАННЫЕ НА СЕРВЕР

    FirstNameChange = (e) => {
      this.setState({
        firstName: e.target.value,
      })
      console.log(this.state.firstName);
    }
    LastNameChange = (e) => {
      this.setState({
        lastName: e.target.value,
      })
      console.log(this.state.lastName);
    }
    EmailChange = (e) => {
      this.setState({
        email: e.target.value,
      })
      console.log(this.state.email);
    }
    PasswordChange= (e) => {
      this.setState({
        password: e.target.value,
      })
      console.log(this.state.password);
    }
    AgainPasswordChange= (e) => {
      this.setState({
        againPassord: e.target.value,
      })
      console.log(this.state.againPassord);
    }
    RegistrationChange = () => {
      let sendingUserData = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        again_password: this.state.againPassord,
        data: JSON.stringify({first_name: first_name, last_name: last_name}),
      }
    }
    render() {
        return (
            <div>
              <div className="forma-user">
                <label><label>First Name:</label> <input onChange={this.FirstNameChange} type="text"/></label>
                <label><label>Last Name:</label> <input  onChange={this.LastNameChange} type="text"/></label>
                <label><label>Email:</label> <input  onChange={this.EmailChange} type="text"/></label>
                <label><label>Password:</label> <input  onChange={this.PasswordChange} type="text"/></label>
                <label><label>again_password:</label> <input  onChange={this.AgainPasswordChange} type="text"/></label>
                <button onClick={this.RegistrationChange}> Регистрация</button>
              </div>
                <section>
                    <Header/>
                    <main className="main-home">
                        <article className={"media"}>
                            <div className="index-tvshows">
                                <Link to={"/tv/popular/1"}><img src="" alt="" className="big-poster"/></Link>
                                <span>
                                    <Link to={"/tv/popular/1"}><img src="" alt="" className="little-poster"/></Link>
                                </span>
                            </div>
                            <div className="index-films">
                            </div>
                        </article>
                    </main>
                    <footer>
                        <div>
                            <div>
                                <Link to={"/tv/popular/1"}><img/></Link>
                                <Link to={"/tv/popular/1"}><label>a</label></Link>
                            </div>
                            <div>
                                <h1>ГЛАВНОЕ</h1>
                                <nav>
                                    <ul>
                                        <li><Link to={"/tv/popular/1"}>О сайте</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Связаться с нами</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Форум</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Блог</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h1>УЧАСТВОВАТЬ</h1>
                                <nav>
                                    <ul>
                                        <li><Link to={"/tv/popular/1"}>Добавить фильм</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Добавить сериал</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h1>СООБЩЕСТВО</h1>
                                <nav>
                                    <ul>
                                        <li><Link to={"/tv/popular/1"}>Правила</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Рейтинг</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Форум</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Twitter</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Facebook</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Vk</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h1>ПРАВОВАЯ ИНФОРМАЦИЯ</h1>
                                <nav>
                                    <ul>
                                        <li><Link to={"/tv/popular/1"}>Условия использования</Link></li>
                                        <li><Link to={"/tv/popular/1"}>Политика конфиденциальности</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </footer>
                </section>
                <Link to={"/tv/popular/1"}>
                    page
                </Link>
            </div>
        )
    }
}

export default Home;
