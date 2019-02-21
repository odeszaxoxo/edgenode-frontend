import React, { Component } from 'react';
import './App.css';
import {ContainerComponent} from './components/Container'
import {Route, Redirect, Switch} from 'react-router-dom';
import {InfoContainerComponent} from './components/infopage/InfoContainer';
import {SearchComponent} from './containers/Search/Search'
import {ProfileComponent} from './containers/Profile/Profile'



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
            <Route path='/search' component={SearchComponent}/>
          <Switch>
            <Redirect from='/profile' exact to='/profile/main'/>
            <Route path='/profile' component={ProfileComponent}/>
          </Switch>
            
      </div>
    );
  }
}

export default App;
