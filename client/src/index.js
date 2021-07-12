import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";


import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Container fluid >
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

