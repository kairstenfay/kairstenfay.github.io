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
          <ul>
            <li>
              <A href="https://linkedin.com/in/kairsten-fay">LinkedIn</A>
            </li>
            <li>
              <A href="https://github.com/kairstenfay">GitHub</A>
            </li>
            <li>
              <A href="https://scholar.google.com/citations?user=opfWq18AAAAJ&hl=en">Google Scholar</A>
            </li>
          </ul>
        </Card>
    </Page>
  )
};

export default CVPage;
