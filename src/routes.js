
import React from 'react';

import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import { IntlProvider } from 'react-intl';

import c from './components';

 // eslint-disable-next-line import/no-webpack-loader-syntax
const webpackRequireContext = require.context('!markdown-with-front-matter-loader!./_posts', false, /\.md$/);
const blogs = [...webpackRequireContext.keys().reduce((memo, fileName) => memo.set(fileName.match(/\.\/([^.]+)\.*/)[1], webpackRequireContext(fileName)), new Map())].reverse();

const routes =
  <IntlProvider locale="en">
    <Router history={browserHistory}>
      <Route path='/' component={c.Layout}>
        <IndexRoute blogs={blogs} component={c.About} />
        <Route path={'blog'} blogs={blogs} component={c.Blogs}/>
        {
          [...blogs].map(blog =>
            <Route key={blog[0]} path={blog[0]} blog={blog[1]} component={c.Blog} />,
          )
        }
        <Route path={'tag/:topic'} blogs={blogs} component={c.Tag}/>
      </Route>
      <Route path='*' component={c.GenericNotFound} />
    </Router>
  </IntlProvider>;

export default routes;
