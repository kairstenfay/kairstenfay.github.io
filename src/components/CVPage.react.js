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
            <A href="https://linkedin.com/in/kairsten-fay">LinkedIn</A>
          </p>
        </Card>
        <Card>
          <p>
            <A href="https://scholar.google.com/citations?user=opfWq18AAAAJ&hl=en">Google Scholar</A>
          </p>
        </Card>
    </Page>
  )
};

export default CVPage;
