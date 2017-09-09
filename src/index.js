import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import StorePicker from './components/StorePicker'

import NotFound from './components/NotFound'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Match, Miss  } from 'react-router';

const Root =  () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
