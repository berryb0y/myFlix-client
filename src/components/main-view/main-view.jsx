import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Col, Row } from 'react-bootstrap';

export class MainView extends React.Component {

    constructor(){
        super();
        //initial state set to null
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }
    //https://dashboard.heroku.com/apps/berry-node-api
    getMovies(token) {
      axios.get('https://dashboard.heroku.com/apps/berry-node-api/movies', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => {
          // Assign the result to the state
          this.setState({
            movies: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        if (accessToken !==  null) {
          this.setState({
            user: localStorage.getItem('user')
          });
          this.getMovies(accessToken);
        }
    }

    //when a movie is clicked, this function updates the state of the selected movie property to that movie
    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    //when a user successfully logs in, this function updates the user property in state to that specific user
    onLoggedIn(authData) {
      console.log(authData);
        this.setState({
            user: authData.user.Username
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    //function to log out 
    
    render() {
        const { movies, selectedMovie, user } = this.state;

        //if no user, the login view will render, if logged in, user details are passed as a prop to the LoginView
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        //before movies have been loaded
        if (movies.length === 0) return <div className="main-view"></div>;

    return (
        <Row className="main-view justify-content-md-center">
          {selectedMovie
            ? (
              <Col md={8}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            )
            : movies.map(movie => (
              <Col md={3}>
                <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              </Col>
            ))
          }
        </Row>
    );
  }
}
export default MainView