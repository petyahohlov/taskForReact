import React, { Component } from 'react';

class MainInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <React.Fragment>
    	<input type="text" id="field" />
    	<button
    		type="button"
    		onClick={ this.props.clickButton }
    	>{ this.props.textButton }</button>
    </React.Fragment>
  }
}

export default MainInput;
