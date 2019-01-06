import React, { Component } from 'react';
import './UniversityPageHeader.scss';
import {headerimg} from '../../assets/MSU.png';


export class UniversityHeaderComponent extends Component {
    
    render() {

        return (
            <div className="university-header">
                <div className="university-header__content">
                    <h1 className="university-header__title">МГУ</h1>
                    <h2 className="university-header__text-title">Московский государственный университет имени М.В. Ломоносова</h2>
                    <p className="university-header__text">МГУ осуществляет подготовку студентов на 39 факультетах по 128 направлениям и специальностям, охватывающим весь спектр современного образования. Кроме традиционных фундаментальных, естественных, гуманитарных и общественных дисциплин, в университете существуют такие междисциплинарные программы как биоинформатика и продюсерство. По таким специальностям как математика, физика, астрономия и химия МГУ входит в число лучших вузов мира. В 2013 году в «шанхайском» академическом рейтинге университетов мира по математике МГУ занял 36 место.</p>
                </div>
            </div>
        );
    }
}