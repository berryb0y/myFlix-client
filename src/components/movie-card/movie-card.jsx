import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        
        return (
            <div onClick={() => onMovieClick(movie)} className="movie-card" >{movie.Title}</div>
        );
    }
}

MovieCard.PropTypes = {
    movie: propTypes.shape({
        Title: propTypes.string.isRequired,
        Description: propTypes.string.isRequired,
        ImagePath: propTypes.string.isRequired,
        Rating: propTypes.string.isRequired,
        Actors: propTypes.array({
            Name: propTypes.isRequired
        }).isRequired,
        Genre: propTypes.shape({
            Name: propTypes.string.isRequired,
            Description: propTypes.string.isRequired
        }).isRequired,
    }).isRequired,
    onMovieClick: propTypes.func.isRequired
};