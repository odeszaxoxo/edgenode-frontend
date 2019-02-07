import React, { Component } from 'react';
import './Search.scss';
import { SearchBarComponent, ResultComponent } from '../../components/search';


export class SearchComponent extends Component {
    
    render() {

        return (
            <div className="search-page">
                    <SearchBarComponent></SearchBarComponent>
                    <ResultComponent></ResultComponent>
            </div>
        );
    }
}