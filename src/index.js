import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { DrizzleProvider } from 'drizzle-react'

// Layouts
import App from './App'
import HomeContainer from './layouts/home/HomeContainer'
import Transparency from './layouts/transparency/Transparency'
import { LoadingContainer } from 'drizzle-react-components'
import Dashboard from './layouts/dashboard/Dashboard'
import Stanthorpe from './layouts/stanthorpe/Stanthorpe'

import store from './store'
import drizzleOptions from './drizzleOptions'

import 'semantic-ui-css/semantic.min.css';

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <DrizzleProvider options={drizzleOptions} store={store}>
    {/* <LoadingContainer> */}
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="transparency" component={Transparency} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="australia/stanthorpe" component={Stanthorpe} />
      </Route>
    </Router>
    {/* </LoadingContainer> */}
  </DrizzleProvider>
),
  document.getElementById('root')
);
