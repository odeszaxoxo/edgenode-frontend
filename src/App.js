import React, { Component } from 'react';
import './App.css';
import {ContainerComponent} from './components/Container'
import {Route, Redirect, Switch} from 'react-router-dom';
import {InfoContainerComponent} from './components/infopage/InfoContainer';



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
          <Switch>
            <Redirect from="/" exact to="/main" />
            <Route path='/main' component={ContainerComponent}/>
          </Switch>
            <Route path='/info' component={InfoContainerComponent}/>
      </div>
    );
  }
}

export default App;
