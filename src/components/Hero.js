import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import '../styling/Components.css';

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder title">
                {props.title}
              </h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-light subtitle">
                {props.subTitle}
              </h3>
            )}
            {props.text && (
              <h3 className="lead font-weight-light text">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
