import React from 'react';
import ReactDOM from 'react-dom';

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'

import Routers from './Routers'

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);
