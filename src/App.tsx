import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './components';
import "./style/main.css";


const  App = () => {
  const {isLoading} = useAuth0();

  // if (isLoading) return <div>Loading...</div>

  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
