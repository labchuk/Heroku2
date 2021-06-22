import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import {MyPersistGate} from "./store/index";
import {persistStore} from "redux-persist";

let persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
      <MyPersistGate loading={null} persistor={persistor}>
        <App />
      </MyPersistGate>
    </Provider>,
  document.getElementById('root')
);

