import React from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import MainRoutes from './Routes';
import ContactProvider from './Context/Event';


function App() {
  return (
    <div className="App">
      <ContactProvider>
        <MainRoutes/>
      </ContactProvider>
    </div>
  );
}

export default App;
