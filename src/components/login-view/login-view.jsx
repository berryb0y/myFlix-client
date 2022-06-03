import React, { useState } from 'react';
import { Form, FormGroup, Button, Row, Col, Container } from 'react-bootstrap/Form';
import axios from 'axios';


export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (isReq) {
        axios.post('https://berry-node-api.herokuapp.com/login', {
            Username: username,
            Password: password
          })
            .then(response => {
              const data = response.data;
              props.onLoggedIn(data);
            })
            .catch(e => {
              console.log('no such user')
            });
        }
      };

    return (
        <Form className="form-login">
            <img src='img/banner.png'></img>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
    
}