import React, { Component } from 'react';
import './LoginForm.css';

export class LoginFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {userName:"", userPassword:""};
    this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
    this.userPasswordChangeHandler = this.userPasswordChangeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  userNameChangeHandler(event) {
    this.setState({userName:event.target.value})
  }

  userPasswordChangeHandler(event) {
    this.setState({userPassword:event.target.value})
  }

  submitForm() {
    console.log(this.state);
  }
    
    render() {

        return (
            <div className="login-form">
                <div className="header">Авторизоваться</div>
                  <div className="login-container">
                    <div className="textfields">
                        <div className="login-textfield">
                            <input type="email" value={this.state.userName} onChange={this.userNameChangeHandler} autoComplete="off"></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className={(this.state.userName.length===0 ? "": "labelActive")}>Электронная почта</label>
                        </div>
                        <div className='login-textfield'>
                            <input type="password" value={this.state.userPassword} onChange={this.userPasswordChangeHandler} autoComplete="new-password"></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className={(this.state.userPassword.length===0 ? "": "labelActive")}>Пароль</label>
                        </div>
                    </div>
                
                    <button className="login-button" onClick={this.submitForm}>Авторизоваться</button>
                    <div className="login-form-links">
                        <a className="login-form-link">Забыли пароль?</a>
                        <a className="login-form-link">Создать новый аккаунт</a>
                    </div>
                    
                  </div>
            </div>
        );
    }
}