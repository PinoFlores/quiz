import * as React from 'react';

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Favicon from '../app/Assets/Favicon.png';
import './App.less';
import NotFound from './pages/NotFound';
import Base from './pages/Layout/Base';

const App = props => {
  const { i18n } = useTranslation();

  return (
    <>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - mhhjhj"
          defaultTitle="lkhkhkjh"
          htmlAttributes={{ lang: i18n.language }}
        >
          <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
          <meta name="description" content="khjhgjhg" />
        </Helmet>

        <Switch>
          <Route path="/login">Login</Route>
          <Route path="/">
            <Base />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
