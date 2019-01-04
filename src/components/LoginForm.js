import React, { Component } from 'react';
import './LoginForm.scss';
import { Link } from "react-router-dom";

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
                    <div className="login-form__header">Авторизоваться</div>
                    <div className="login-form__container">
                        <div className="login-form__textfields">
                            <div className="login-form__textfield">
                                <input className="login-form__input" type="email" value={this.state.userName} onChange={this.userNameChangeHandler} autoComplete="off"></input>
                                <span className="login-form__input-highlight"></span>
                                <span className="login-form__input-bar"></span>
                                <label className={(this.state.userName.length===0 ? "login-form__input-label": "login-form__input-label login-form__input-label_active")}>Электронная почта</label>
                            </div>
                            <div className='login-form__textfield'>
                                <input className="login-form__input" type="password" value={this.state.userPassword} onChange={this.userPasswordChangeHandler} autoComplete="new-password"></input>
                                <span className="login-form__input-highlight"></span>
                                <span className="login-form__input-bar"></span>
                                <label className={(this.state.userPassword.length===0 ? "login-form__input-label": "login-form__input-label login-form__input-label_active")}>Пароль</label>
                            </div>
                        </div>
                    
                        <button className="login-form__button" onClick={this.submitForm}>Авторизоваться</button>
                        <div className="login-form__links">
                            <Link to="/main/recovery" className="login-form__link">Забыли пароль?</Link>
                            <Link to="/main/registration" className="login-form__link">Создать новый аккаунт</Link>
                        </div>
                        
                    </div>
                </div>
        );
    }
}