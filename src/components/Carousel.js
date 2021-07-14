import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Card from '../components/Card';
import youtube from '../assets/images/youtube.jpg';
import google from '../assets/images/google.jpg';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Card 1',
          subTitle: 'This is card 1',
          imgSrc: youtube,
          link: 'https://youtube.com',
          selected: false,
        },
        {
          id: 1,
          title: 'Card 2',
          subTitle: 'This is card 2',
          imgSrc: google,
          link: 'https://google.com',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          <Col>{this.makeItems(this.state.items)}</Col>
        </Row>
      </Container>
    );
  }
}

export default Carousel;
