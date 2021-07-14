import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Hello</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
      </Content>
    </div>
  );
}

export default AboutPage;
