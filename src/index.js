import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import store from './state/store';

import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { repos as allRepos } from './repos.data';
import { normalize, schema } from 'normalizr';

const repos = allRepos.flat();
console.log(JSON.stringify({ repos }));
const repoSchema = new schema.Entity('repos');
const repoListSchema = [repoSchema];
const repoDictionary = normalize(repos, repoListSchema);
console.group('repoDictionary');
console.log(repoDictionary);
console.groupEnd();

/* using hash router for static deploy */
ReactDOM.render(
  <Provider store={store}>
    {process.env.NODE_ENV === 'production' ? (
      <HashRouter basename="/">
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
