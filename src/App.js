import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArchitecturePage from './pages/ArchitecturePage';
import ContactPage from './pages/ContactPage';
import EnvironmentPage from './pages/EnvironmentPage';
import FilmPage from './pages/FilmPage';
import OtherPage from './pages/OtherPage';
import PortraitsPage from './pages/PortraitsPage';
import WildlifePage from './pages/WildlifePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Yana',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Architecture', path: '/architecture' },
        { title: 'Environment', path: '/environment' },
        { title: 'Portraits', path: '/portraits' },
        { title: 'Wildlife', path: '/wildlife' },
        { title: 'Film', path: '/film' },
        { title: 'Other', path: '/other' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Yana',
        subTitle: 'Computer Science / Photography',
        text: 'Checkout my photographs!',
      },
      architecture: {
        title: 'Architecture',
      },
      environment: {
        title: 'Environment',
      },
      Portraits: {
        title: 'Portraits',
      },
      wildlife: {
        title: 'Wildlife',
      },
      film: {
        title: 'Film',
      },
      other: {
        title: 'Other',
      },
      about: {
        title: 'About',
      },
      contact: {
        title: 'Contact',
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0 nav-bar" fluid={true}>
          <Navbar className="" /*"border-bottom"*/ bg="transparent">
            <Navbar.Brand>
              <div className="nav-bar-title">Yana</div>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" />
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/architecture">
                Architecture
              </Link>
              <Link className="nav-link" to="/environment">
                Environment
              </Link>
              <Link className="nav-link" to="/portraits">
                Portraits
              </Link>
              <Link className="nav-link" to="/wildlife">
                Wildlife
              </Link>
              <Link className="nav-link" to="/film">
                Film
              </Link>
              <Link className="nav-link" to="/other">
                Other
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar>

          {/* Home Page Route  */}
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          {/* About Page Route */}
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />

          {/* Architecture Page Route */}
          <Route
            path="/architecture"
            render={() => (
              <ArchitecturePage title={this.state.architecture.title} />
            )}
          />

          {/* Contact Page Route */}
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          {/* Environment Page Route */}
          <Route
            path="/environment"
            render={() => (
              <EnvironmentPage title={this.state.environment.title} />
            )}
          />

          {/* Film Page Route */}
          <Route
            path="/film"
            render={() => <FilmPage title={this.state.film.title} />}
          />

          {/* Other Page Route */}
          <Route
            path="/other"
            render={() => <OtherPage title={this.state.other.title} />}
          />

          {/* Portraits Page Route */}
          <Route
            path="/portraits"
            render={() => <PortraitsPage title={this.state.Portraits.title} />}
          />

          {/* Wildlife Page Route */}
          <Route
            path="/wildlife"
            render={() => <WildlifePage title={this.state.wildlife.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
