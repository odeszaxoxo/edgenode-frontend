import React, { Component } from 'react';
import './ProfileQualificationsForm.scss';
import { Link } from "react-router-dom";

export class ProfileQualificationsFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {name: "", fullForms:[{ name: "", text: "", selectType: ""}], qualificationType: ""};
    }

    handleNameChange = idx => event => {
        const newFullForms = this.state.fullForms.map((fullForm, sidx) => {
            if (idx !== sidx) return fullForm;
            return {...fullForm, name: event.target.value};
        });
        this.setState({fullForms: newFullForms});
    };

    handleTextChange = idx => event => {
        const newFullForms = this.state.fullForms.map((fullForm, sidx) => {
            if (idx !== sidx) return fullForm;
            return {...fullForm, text: event.target.value};
        });
        this.setState({fullForms: newFullForms});
    };

    handleSelectChange = idx => event => {
        const newFullForms = this.state.fullForms.map((fullForm, sidx) => {
            if (idx !== sidx) return fullForm;
            return {...fullForm, selectType: event.target.value};
        });
        this.setState({fullForms: newFullForms});
    };
    
    handleAddForm = () =>{
        this.setState({fullForms: this.state.fullForms.concat([{name: "", text:"", selectType:""}])});
    } 

    qualificationTypeHandler = (event) => {
        this.setState({qualificationType:event.target.value})
    }

    submitForm = () =>{
        console.log(this.state);
    }

    render() {

        return (
            <div className="qualifications-form">
                <div className="qualifications-form__select-container">
                    <select className="qualifications-form__select" value={this.state.qualificationType} onChange={this.qualificationTypeHandler} required>
                    <option defaultValue="" ></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                    <span className="qualifications-form__select-highlight"></span>
                    <span className="qualifications-form__select-bar"></span>
                    <label className={(this.state.qualificationType.length===0 ? "qualifications-form__select-label": "qualifications-form__select-label qualifications-form__select-label_active")}>Qualification type</label>
                </div>
                {this.state.fullForms.map((fullForm, idx) => (
                    <div className="qualifications-form__inputs" key={idx}>
                        <button className="qualifications-form__add" onClick={this.handleAddForm}><i className="material-icons add-button">add_circle_outline</i></button>
                        <div className="qualifications-form__select-container">
                            <select className="qualifications-form__select" value={this.state.selectType} onChange={this.handleSelectChange(idx)} data-id={idx}>
                            <option defaultValue="" disabled hidden>Module type</option>
                            <option value="empty"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                            <span className="qualifications-form__select-highlight"></span>
                            <span className="qualifications-form__select-bar"></span>
                        </div>
                        <input className="qualifications-form__input" placeholder={''} value={fullForm.name} onChange={this.handleNameChange(idx)} data-id={idx}></input>
                        <input className="qualifications-form__input" placeholder={''} value={fullForm.text} onChange={this.handleTextChange(idx)} data-id={idx}></input>
                    </div>      
                ))}
                <div className="qualifications-form__button-container">
                    <button className="qualifications-form__submit" onClick={this.submitForm}>Submit</button>
                </div>
            </div>
        );
    }
}