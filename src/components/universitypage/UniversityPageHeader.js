import React, { Component } from 'react';
import './UniversityPageHeader.scss';


export class UniversityHeaderComponent extends Component {
    
    render() {

        return (
            <div className="university-header">
                <div className="university-header__content">
                    <h1 className="university-header__title">МГУ</h1>
                    <h2 className="university-header__text-title">Lomonosov Moscow State University</h2>
                    <p className="university-header__text">More than 40 000 students (graduate and postgraduate) and about 7 000 undergraduates study at the university, and over 5 000 specialists do the refresher course here. More than 6 000 professors and lecturers, and about 5 000 researchers work for the faculties and research institutes.</p>
                </div>
            </div>
        );
    }
}