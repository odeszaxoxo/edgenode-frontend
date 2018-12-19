import React, { Component } from 'react';
import './App.css';
import { MainComponent } from "./containers";
import { object } from 'prop-types';
import { LoginFormComponent } from './components/LoginForm';
import { RegistrationFormComponent } from "./containers";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {ContainerComponent} from './components/Container';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos:[]};
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    this.setState({todos:json})
  })
  }
  render() {
    const listItems = this.state.todos.map((todo) =>
    <div key={todo.id}>{todo.title}</div>
);
    return (
      <div className="App">
            <ContainerComponent></ContainerComponent>
      </div>
    );
  }
}

export default App;
