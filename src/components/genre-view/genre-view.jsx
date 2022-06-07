import React from 'React';
import PropTypes from 'prop-types';
import { Row, Button, Col, Container } from 'react-bootstrap';

export class GenreView extends React.Component {
    render() {
    const { genre, onBackClick } = this.props;

        return (
            <Container>
                <Row className="mt-3">
                    <Col className="label">Genre: </Col>
                    <Col className="value">{genre.Genre.Name}</Col>
                </Row>
                <Row className="mt-3">
                    <Col className="label">Description: </Col>
                    <Col className="value">{genre.Genre.Description}</Col>
                </Row>
                <Button onClick={() => { onBackClick(null); }}>Back</Button>
            </Container>
        );
    }
}

GenreView.proptypes = {
    genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};