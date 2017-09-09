import React, { PureComponent } from 'react';

class StorePicker extends PureComponent {
  render(){
    return (
      <form className='store-selector'>
        <h2>Please Enter A Store</h2>
        {/* don't put comments at the top of return block */}
        <input type='text' required placeholder='Store Name' />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
