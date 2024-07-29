import React from 'react';
import "./App.css";
import TabComponent from 'Tab/TabComponent';
import Greet from 'components/props';
import Connect from 'components/handling';
import CheckingInternetStatus from 'Internet Status/CheckingInternetStatus';
import Controlled from 'ControlledAndUncontrolledComponents/Controlled';
import Uncontrolled from 'ControlledAndUncontrolledComponents/Uncontrolled';



function App() {

  return (
      <div className="app">
        <Controlled/>
        <Uncontrolled/>
    </div>
  );
}

export default App;
