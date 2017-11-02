import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from 'components/Nav';
import FoodList from 'containers/FoodList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { foods: []}
  }

  componentDidMount() {
    fetch('/food?q=banana')
      .then(res => res.json())
      .then(foods => this.setState({ foods }))
  }

  render() {
    // [{title: "test", description: "test"},{title: "test", description: "test"}
    return (
      <div className="App">
        <Nav />
        <FoodList foods={this.state.foods}/>
      </div>
    );
  }
}

export default App;
