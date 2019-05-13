import React from 'react';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({value : this.state.value+1});
    // alert (this.state.value);
    this.render();
  }

  render() {
    return (
      <button class="mdc-button" onClick={this.changeName}>
        <span class="mdc-button__label">Button {this.state.value}</span>
      </button>
    );
  }
}

export default App;
