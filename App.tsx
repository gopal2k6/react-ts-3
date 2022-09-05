import * as React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { valuetxt: 'Please enter the value' };
    onchange = (event) => {
      this.setState({ valuetxt: event.target.value });
    };
  }

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <input type="text" onChange={this.onchange} />

        <p>{this.state.valuetxt}</p>
      </div>
    );
  }
}
