import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      text: '',
      showText: false,
    };
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.showText = this.showText.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  changeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }
  showText() {
    this.setState({
      showText: true,
      text: `My name is ${this.state.name} and age ${this.state.age}`,
    });
  }
  renderName() {
    return (
      <div>
        <label htmlFor="name"> Name: </label>
        <input type="text" onChange={this.changeName} />
      </div>
    );
  }
  renderAge() {
    return (
      <div>
        <label htmlFor="age"> Age: </label>
        <input type="text" onChange={this.changeAge} />
      </div>
    );
  }
  renderShowText() {
    return (
      <button onClick={this.showText}>Show Text</button>
    );
  }
  renderText() {
    return (
      <p>{this.state.text}</p>
    );
  }
  render() {
    return (
      <div>
        {this.renderName()}
        {this.renderAge()}
        {this.renderShowText()}
        {this.renderText()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
