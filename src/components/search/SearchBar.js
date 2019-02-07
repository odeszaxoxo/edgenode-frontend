import React, { Component } from 'react';
import './SearchBar.scss';


export class SearchBarComponent extends Component {

    constructor(props){
        super(props);
        this.state = {searchRequest:"", academicArea:"", languageTaughtIn:"", degreeType:"", countryName:false, institutionName:false, admissionDate:false, worldTop:false};
    }

    logFields = () => {
        console.log(JSON.stringify(this.state));
    }

    userSearchRequestHandler = (event) => {
        this.setState({searchRequest:event.target.value}, () => {this.logFields()});  
    }

    userLanguageTaughtInHandler = (event) => {
        this.setState({languageTaughtIn:event.target.value}, () => {this.logFields()})
    }

    userDegreeTypeHandler = (event) => {
        this.setState({degreeType:event.target.value}, () => {this.logFields()})
    }

    userAcademicAreaHandler = (event) => {
        this.setState({academicArea:event.target.value}, () => {this.logFields()})
    }

    userCountryNameHandler = (event) => {
        this.setState({countryName:event.target.value==="on"? true:false}, () => {this.logFields()})
    }

    userInstitutionNameHandler = (event) => {
        this.setState({institutionName:event.target.value==="on"? true:false}, () => {this.logFields()})
    }

    userAdmissionDateHandler = (event) => {
        this.setState({admissionDate:event.target.value==="on"? true:false}, () => {this.logFields()})
    }

    userWorldTopHandler = (event) => {
        this.setState({worldTop:event.target.value==="on"? true:false}, () => {this.logFields()})
    }

    render() {

        return (
            <div className="search-bar">
                <div className="search-bar__input-container">
                    <div className="search-bar__input-textfield">
                        <input className="search-bar__input" type="search" value={this.state.searchRequest} onChange={this.userSearchRequestHandler} autoComplete="off"></input>
                        <span className="search-bar__input-highlight"></span>
                        <span className="search-bar__input-bar"></span>
                        <label className={(this.state.searchRequest.length===0 ? "search-bar__input-label": "search-bar__input-label search-bar__input-label_active")}>Search</label>
                    </div>
                </div>
                <div className="search-bar__header">
                    <p className="search-bar__header-text">Filter by:</p>
                </div>
                <div className="search-bar__select-list">
                    <div className="search-bar__select-container">
                        <select className="search-bar__select" value={this.state.academicArea} onChange={this.userAcademicAreaHandler}>
                            <option defaultValue="" ></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                            <span className="search-bar__select-highlight"></span>
                            <span className="search-bar__select-bar"></span>
                            <label className={(this.state.academicArea.length===0 ? "search-bar__select-label": "search-bar__select-label search-bar__select-label_active")}>Academic Area</label>
                    </div>    
                    <div className="search-bar__select-container">
                        <select className="search-bar__select" value={this.state.languageTaughtIn} onChange={this.userLanguageTaughtInHandler}>
                            <option defaultValue="" ></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                            <span className="search-bar__select-highlight"></span>
                            <span className="search-bar__select-bar"></span>
                            <label className={(this.state.languageTaughtIn.length===0 ? "search-bar__select-label": "search-bar__select-label search-bar__select-label_active")}>Language Taught In</label>
                    </div>
                    <div className="search-bar__select-container">
                        <select className="search-bar__select" value={this.state.degreeType} onChange={this.userDegreeTypeHandler}>
                            <option defaultValue="" ></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                            <span className="search-bar__select-highlight"></span>
                            <span className="search-bar__select-bar"></span>
                            <label className={(this.state.degreeType.length===0 ? "search-bar__select-label": "search-bar__select-label search-bar__select-label_active")}>Degree Type</label>
                    </div>
                </div>
                <div className="search-bar__header">
                    <p className="search-bar__header-text">Arrange by:</p>
                </div>
                <div className="search-bar__checkbox-list">
                    <div className="search-bar__checkbox-container">
                        <label className="search-bar__checkbox-label" htmlFor="search-checkbox-1">Country name:</label>
                        <input className="search-bar__checkbox" type="checkbox" id='search-checkbox-1' onChange={this.userCountryNameHandler} checked={this.countryName}/>
                    </div>
                    <div className="search-bar__checkbox-container">
                        <label className="search-bar__checkbox-label" htmlFor="search-checkbox-2">Institution name:</label>
                        <input className="search-bar__checkbox" type="checkbox" id='search-checkbox-2' onChange={this.userInstitutionNameHandler} checked={this.institutionName}/>
                    </div>
                    <div className="search-bar__checkbox-container">
                        <label className="search-bar__checkbox-label" htmlFor="search-checkbox-3">Admissions date:</label>
                        <input className="search-bar__checkbox" type="checkbox" id='search-checkbox-3' onChange={this.userAdmissionDateHandler} checked={this.admissionDate}/>
                    </div>
                    <div className="search-bar__checkbox-container">
                        <label className="search-bar__checkbox-label" htmlFor="search-checkbox-4">QS World Top 100:</label>
                        <input className="search-bar__checkbox" type="checkbox" id='search-checkbox-4' onChange={this.userWorldTopHandler} checked={this.worldTop}/>
                    </div>
                </div>
            </div>
        );
    }
}