import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styling/Components.css';

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-center p-2 border">
          © 2019-2021
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
