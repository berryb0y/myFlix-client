import React from 'React';
import PropTypes from 'prop-types';
import { Row, Button, Col, Container } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {
    render() {
        const { director, onBackClick } = this.props;
        
        return (
            <Container>
                <Row className="mt-3">
                    <Col className="label">Director: </Col>
                    <Col className="value">{director.Director.Name}</Col>
                </Row>
                <Row className="mt-3">
                    <Col className="label">Bio: </Col>
                    <Col className="value">{director.Director.Bio}</Col>
                </Row>
                <Row className="mt-3">
                    <Col className="label">Birth: </Col>
                    <Col className="value">{director.Director.Birth}</Col>
                </Row>
                <Button onClick={() => { onBackClick(null); }}>Back</Button>                
            </Container>
        )
    }
}

DirectorView.propTypes = {
    director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.string.isRequired
    }).isRequired
};