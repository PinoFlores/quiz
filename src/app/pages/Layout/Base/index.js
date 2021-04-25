import * as React from 'react';
import { Helmet } from 'react-helmet-async';

const Base = props => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Some Containt" />
      </Helmet>
      <div>Base Page</div>
    </>
  );
};

export default Base;
