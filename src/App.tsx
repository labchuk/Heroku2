import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './components';
import "./style/main.css";


const  App = () => {

  return (
      <div className={"app-wrapper-container"}>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
      </div>
  );
}

export default App;
