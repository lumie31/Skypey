import React from 'react';
import './App.css';
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import store from "../store";
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


