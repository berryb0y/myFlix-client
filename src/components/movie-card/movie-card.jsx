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

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Rating: PropTypes.string.isRequired,
        Actors: PropTypes.arrayOf(PropTypes.shape({
            Name: PropTypes.string.isRequired
        })).isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};