import React from 'react';

import A from './A.react';
import Card from './Card.react';
import Page from './Page.react';

const CVPage = (props) => {
  return (
    <Page
      title="My CV"
      className="bg-white"
      isVisible={props.isVisible}>
        <Card>
          <p>
            See <A>my LinkedIn</A>.
          </p>
        </Card>
    </Page>
  )
};

export default CVPage;
