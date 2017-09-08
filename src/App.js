import React, { PureComponent } from 'react';
import './App.css';
import StorePicker from './components/StorePicker'
import Header from './components/Header'
import Order from './components/Order'
import Inventory from './components/Inventory'

class App extends PureComponent {
  render() {
    return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header />
      </div>
        <Order />
        <Inventory />
      <StorePicker />
    </div>
    );
  }
}

export default App;
