import React, { Component } from 'react';
import './RegistrationForm.scss';

export class RegistrationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {userName:"", userEmail:"",userFullName:"",userPassword:"",userConfirmationPassword:"",userPhoneNumber:"",userCity:"",userRights:true, };
        this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
        this.userEmailChangeHandler = this.userEmailChangeHandler.bind(this);
        this.userFullNameChangeHandler = this.userFullNameChangeHandler.bind(this);
        this.userPasswordChangeHandler = this.userPasswordChangeHandler.bind(this);
        this.userConfirmationPasswordChangeHandler = this.userConfirmationPasswordChangeHandler.bind(this);
        this.userPhoneNumberChangeHandler = this.userPhoneNumberChangeHandler.bind(this);
        this.userCityChangeHandler = this.userCityChangeHandler.bind(this);
        this.userRightsChangeHandler = this.userRightsChangeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
    
      userNameChangeHandler(event) {
        this.setState({userName:event.target.value})
      }
    
      userEmailChangeHandler(event) {
        this.setState({userEmail:event.target.value})
      }

      userFullNameChangeHandler(event) {
          this.setState({userFullName:event.target.value})
      }

      userPasswordChangeHandler(event) {
          this.setState({userPassword:event.target.value})
      }

      userConfirmationPasswordChangeHandler(event) {
          this.setState({userConfirmationPassword:event.target.value})
      }

      userPhoneNumberChangeHandler(event) {
          this.setState({userPhoneNumber:event.target.value})
      }

      userCityChangeHandler(event) {
          this.setState({userCity:event.target.value})
      }

      userRightsChangeHandler(event) {
          this.setState({userRights:event.target.value})
      }
    
      submitForm() {
        console.log(this.state);
      }
        
        render() {
    
            return (
                    <div className="registration-form">
                        <div className="header">Регистрация</div>
                        <div className="registration-container">
                            <div className="registration-textfields">
                                <div className="layer">
                                    <div className="registration-textfield">
                                        <input type="text" value={this.state.userName} onChange={this.userNameChangeHandler} autoComplete="off"></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label className={(this.state.userName.length===0 ? "": "labelActive")}>Имя пользователя</label>
                                    </div>
                                    <div className='registration-textfield'>
                                        <input type="email" value={this.state.userEmail} onChange={this.userEmailChangeHandler} autoComplete="off"></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label className={(this.state.userEmail.length===0 ? "": "labelActive")}>Электронная почта</label>
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className='registration-textfield' id="fullname-textfield">
                                        <input className="input-wide" type="text" value={this.state.userFullName} onChange={this.userFullNameChangeHandler} autoComplete="off" id="name-input"></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label className={(this.state.userFullName.length===0 ? "": "labelActive")}>Полное имя</label>
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className="registration-textfield">
                                        <input type="password" value={this.state.userPassword} onChange={this.userPasswordChangeHandler} autoComplete="off"></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label className={(this.state.userPassword.length===0 ? "": "labelActive")}>Пароль</label>
                                    </div>
                                    <div className='registration-textfield'>
                                        <input type="password" value={this.state.userConfirmationPassword} onChange={this.userConfirmationPasswordChangeHandler} autoComplete="off"></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label className={(this.state.userConfirmationPassword.length===0 ? "": "labelActive")}>Подтвердите пароль</label>
                                    </div>
                                </div> 
                                <div className="layer">
                                    <div className="registration-textfield">
                                        <input type="tel" value={this.state.userPhoneNumber} onChange={this.userPhoneNumberChangeHandler} autoComplete="off"></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label className={(this.state.userPhoneNumber.length===0 ? "": "labelActive")}>Номер телефона</label>
                                    </div>
                                    <div className="registration-select">
                                        <select className="select-text" value={this.state.userCity} onChange={this.userCityChangeHandler}>
                                        <option defaultValue="" ></option>
                                        <option value="1">Москва</option>
                                        <option value="2">Санкт-Петербург</option>
                                        <option value="3">Саратов</option>
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
                                        <label className={(this.state.userCity.length===0 ? "": "labelActive")}>Город проживания</label>
                                    </div>
                                </div> 
                                <div className="layer">
                                    <div className="registration-checkbox">
                                        <input type="checkbox" onClick={this.userRightsChangeHandler} checked={this.userRights}/>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        
                            <button className="registration-button" onClick={this.submitForm}>Зарегистрироваться</button>
                            
                            
                        </div>
                    </div>
            );
        }
    }