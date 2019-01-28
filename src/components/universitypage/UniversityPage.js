import React from 'react';
import './UniversityPage.scss';
import InfoImg from '../../assets/MSUInfo.png';


export const UniversityPageComponent = () => {
    
    return (
        <div className="university-main">
            <div className="university-main__table">

            </div>
            <div className="university-info">
                <div className="university-info__text-block">
                    <h1 className="university-info__title">Addresses</h1>
                    <p className="university-info__text"><i className="material-icons info-icon">place</i>GSP-1, Leninskie Gory, Moscow, 119991, Russian Federation</p>
                    <p className="university-info__text"><i className="material-icons info-icon">phone_iphone</i>+7 (495) 939-27-29 </p>
                    <a className="university-info__link" href="mailto:priemnayamsu@gmail.com"><i className="material-icons info-icon">mail_outline</i>priemnayamsu@gmail.com</a>
                    <a className="university-info__link" target="_blank" rel="noopener" href="https://www.msu.ru/"><i className="material-icons info-icon">language</i>msu.ru</a>
                    <button className="university-info__button">Apply</button>
                </div>
                <div className="university-info__image-block">
                    <img src={InfoImg} alt="" className="university-info__image"/>
                </div>
            </div>>
        </div>
    );
}
