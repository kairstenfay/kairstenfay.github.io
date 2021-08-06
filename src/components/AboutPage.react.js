import React from 'react';

import A from './A.react';
import Card from './Card.react';
import Page from './Page.react';

const AboutPage = (props) => {
  return (
    <Page
      title="About Me"
      className="bg-white"
      isVisible={props.isVisible}>
        <Card>
          <p>
            Hi, I'm Kairsten (she/her). I'm a self-taught engineer from a non-technical
            background. I enjoy teaching, making art and code, and discussing
            career advice.
          </p>
        </Card>
        <Card>
          <p>
            Please feel free to email me at{' '}
            <A href="mailto:kairsten.fay@gmail.com">kairsten.fay@gmail.com</A>.
          </p>
        </Card>
    </Page>
  )
};

export default AboutPage;
