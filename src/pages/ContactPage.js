import React from 'react';

import { Form, Button } from 'react-bootstrap';

import Hero from '../components/Hero';
import Content from '../components/Content';
import '../styling/Pages.css';
class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disable: true,
    });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <div className="form-title">
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
              </div>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <div className="form-title">
                <Form.Label htmlFor="email">Email</Form.Label>{' '}
              </div>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <div className="form-title">
                <Form.Label htmlFor="message">Message</Form.Label>{' '}
              </div>
              <Form.Control
                id="Message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <div className="submit-button">
              <Button
                className="d-inline-block"
                variant="primary"
                type="submit"
                disabled={this.state.disabled}
              >
                Send
              </Button>
            </div>

            {this.state.emailSend === true && (
              <p className="d-inline success-msg">Email Sent!</p>
            )}
            {this.state.emailSend === false && (
              <p className="d-inline err-msg">Email Not Sent </p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
