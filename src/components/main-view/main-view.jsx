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

    componentDidMount(){
        axios.get('https://berry-node-api.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            }) 
            .catch(error => {
                console.log(error);
            });
    }

    //when a movie is clicked, this function updates the state of the selected movie property to that movie
    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    //when a user successfully logs in, this function updates the user property in state to that specific user
    onLoggedIn(user) {
        this.setState({
            user
        });
    }
    
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