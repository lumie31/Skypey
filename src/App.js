import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import Sidebar from "./Sidebar";
import store from "./store";
import _ from 'lodash'

const App = () => {
  const { contacts } = store.getState()
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;


