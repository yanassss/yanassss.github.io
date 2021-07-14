import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styling/Components.css';

function Footer() {
  return (
    <footer className="mt-0">
      <Container fluid={true}>
        <Row className="justify-content-center p-2 footer">© 2019-2021</Row>
      </Container>
    </footer>
  );
}

export default Footer;
