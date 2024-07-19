import React from 'react';
import "./App.css";
import TabComponent from 'Tab/TabComponent';
import Greet from 'components/props';
import Connect from 'components/handling';
import CheckingInternetStatus from 'Internet Status/CheckingInternetStatus';



function App() {

  return (
      <div className="app">
        <CheckingInternetStatus/>
    </div>
  );
}

export default App;
