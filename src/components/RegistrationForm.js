import React, { Component } from 'react';
import './RegistrationForm.scss';
import { Link } from 'react-router-dom';

export class RegistrationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {userName:"", userEmail:"",userFullName:"",userPassword:"",userConfirmationPassword:"",userPhoneNumber:"",userCity:"",userRights:true};
      }
    
      userNameChangeHandler = (event) => {
        this.setState({userName:event.target.value})
      }
    
      userEmailChangeHandler = (event) => {
        this.setState({userEmail:event.target.value})
      }

      userFullNameChangeHandler = (event) => {
          this.setState({userFullName:event.target.value})
      }

      userPasswordChangeHandler = (event) => {
          this.setState({userPassword:event.target.value})
      }

      userConfirmationPasswordChangeHandler = (event) => {
          this.setState({userConfirmationPassword:event.target.value})
      }

      userPhoneNumberChangeHandler = (event) => {
          this.setState({userPhoneNumber:event.target.value})
      }

      userCityChangeHandler = (event) => {
          this.setState({userCity:event.target.value})
      }

      userRightsChangeHandler = (event) => {
          this.setState({userRights:event.target.value==="on"? true:false})
      }
    
      submitForm = () => {
        console.log(this.state);
      }
        
        render() {
    
            return (
                    <div className="registration-form">
                        <div className="registration-form__header">Регистрация</div>
                        <div className="registration-form__container">
                            <div className="registration__textfields">
                                <div className="registration__textfields-layer">
                                    <div className="registration__textfield">
                                        <input className="registration-form__input" type="text" value={this.state.userName} onChange={this.userNameChangeHandler} autoComplete="off"></input>
                                        <span className="registration-form__input-highlight"></span>
                                        <span className="registration-form__input-bar"></span>
                                        <label className={(this.state.userName.length===0 ? "registration-form__input-label": "registration-form__input-label registration-form__input-label_active")}>Имя пользователя</label>
                                    </div>
                                    <div className='registration__textfield'>
                                        <input className="registration-form__input" type="email" value={this.state.userEmail} onChange={this.userEmailChangeHandler} autoComplete="off"></input>
                                        <span className="registration-form__input-highlight"></span>
                                        <span className="registration-form__input-bar"></span>
                                        <label className={(this.state.userEmail.length===0 ? "registration-form__input-label": "registration-form__input-label registration-form__input-label_active")}>Электронная почта</label>
                                    </div>
                                </div>
                                <div className="registration__textfields-layer">
                                    <div className='registration__textfield-fullname'>
                                        <input  className="registration-form__input-fullname" type="text" value={this.state.userFullName} onChange={this.userFullNameChangeHandler} autoComplete="off"></input>
                                        <span className="registration-form__input-highlight"></span>
                                        <span className="registration-form__input-bar"></span>
                                        <label className={(this.state.userFullName.length===0 ? "registration-form__input-label": "registration-form__input-label registration-form__input-label_active")}>Полное имя</label>
                                    </div>
                                </div>
                                <div className="registration__textfields-layer">
                                    <div className="registration__textfield">
                                        <input className="registration-form__input" type="password" value={this.state.userPassword} onChange={this.userPasswordChangeHandler} autoComplete="off"></input>
                                        <span className="registration-form__input-highlight"></span>
                                        <span className="registration-form__input-bar"></span>
                                        <label className={(this.state.userPassword.length===0 ? "registration-form__input-label": "registration-form__input-label registration-form__input-label_active")}>Пароль</label>
                                    </div>
                                    <div className='registration__textfield'>
                                        <input className="registration-form__input" type="password" value={this.state.userConfirmationPassword} onChange={this.userConfirmationPasswordChangeHandler} autoComplete="off"></input>
                                        <span className="registration-form__input-highlight"></span>
                                        <span className="registration-form__input-bar"></span>
                                        <label className={(this.state.userConfirmationPassword.length===0 ? "registration-form__input-label": "registration-form__input-label registration-form__input-label_active")}>Подтвердите пароль</label>
                                    </div>
                                </div> 
                                <div className="registration__textfields-layer">
                                    <div className="registration__textfield">
                                        <input className="registration-form__input" type="tel" value={this.state.userPhoneNumber} onChange={this.userPhoneNumberChangeHandler} autoComplete="off"></input>
                                        <span className="registration-form__input-highlight"></span>
                                        <span className="registration-form__input-bar"></span>
                                        <label className={(this.state.userPhoneNumber.length===0 ? "registration-form__input-label": "registration-form__input-label registration-form__input-label_active")}>Номер телефона</label>
                                    </div>
                                    <div className="registration__textfields-select">
                                        <select className="registration-form__select" value={this.state.userCity} onChange={this.userCityChangeHandler}>
                                        <option defaultValue="" ></option>
                                        <option value="1">Москва</option>
                                        <option value="2">Санкт-Петербург</option>
                                        <option value="3">Саратов</option>
                                        </select>
                                        <span className="registration-form__select-highlight"></span>
                                        <span className="registration-form__select-bar"></span>
                                        <label className={(this.state.userCity.length===0 ? "registration-form__select-label": "registration-form__select-label registration-form__select-label_active")}>Город проживания</label>
                                    </div>
                                </div> 
                                <div className="registration__textfields-layer">
                                    <div className="registration__checkbox">
                                        <input className="registration-form__checkbox" type="checkbox" id='q' onChange={this.userRightsChangeHandler} checked={this.userRights}/>
                                        <label className="registration-form__checkbox-label" htmlFor="q">Я согласен/согласна с <Link to="main/rules" className="registration-form__link">политикой конфиденциальности.</Link></label>
                                    </div>
                                </div>
                            </div>
                            <div className="registration__button-container">
                            <button className="registration__button" onClick={this.submitForm}>Зарегистрироваться</button>
                            </div>
                            
                        </div>
                    </div>
                    
            );
        }
    }