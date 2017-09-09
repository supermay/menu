import React, { PureComponent } from 'react';
import './App.css';
import Header from './components/Header'
import Order from './components/Order'
import Inventory from './components/Inventory'

class App extends PureComponent {
  render() {
    return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline='Fresh Seafood Market' />
      </div>
        <Order />
        <Inventory />
    </div>
    );
  }
}

export default App;
