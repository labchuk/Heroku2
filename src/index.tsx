import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Auth0Provider } from '@auth0/auth0-react';

const domain : string | undefined = process.env.REACT_APP_AUTHO_DOMAIN!;
const clientId : string | undefined = process.env.REACT_APP_AUTHO_CLIENT_ID!;



// ReactDOM.render(


//   <Auth0Provider
//   domain={domain}
//   clientId = {clientId}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

