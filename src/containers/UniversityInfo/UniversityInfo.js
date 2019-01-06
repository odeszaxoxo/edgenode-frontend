import React, { Component } from 'react';
import './UniversityInfo.scss';
import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { UniversityPageComponent, UniversityHeaderComponent } from '../../components/universitypage';


export class UniversityInfoComponent extends Component {
    
    render() {

        return (
            <div className="university-page">
                    <UniversityHeaderComponent></UniversityHeaderComponent>
                    <UniversityPageComponent></UniversityPageComponent>
            </div>
        );
    }
}