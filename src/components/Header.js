import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render(){
    return (
      <header className="top">
        Catch
        <span className="of">of</span>
        <span className="the">the</span>
        <span className="day">Day</span>
        <h3 className="tagline">{ this.props.tagline }</h3>
      </header>
    )
  }
}

export default Header;
