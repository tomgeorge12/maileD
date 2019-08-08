import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './client/login';
import Dashboard from './client/dashboard';;

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
}

export default App;
