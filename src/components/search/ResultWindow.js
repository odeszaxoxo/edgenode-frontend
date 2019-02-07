import React, { Component } from 'react';
import './ResultWindow.scss';


export class ResultComponent extends Component {
    
    render() {

        return (
            <div className="result-window">
                    <table className="result-window__table">
                        <tbody>
                            <tr>
                                <th className="result-window__table-close">1</th>
                                <th className="result-window__table-header">Course Name</th>
                                <th className="result-window__table-header">Institution Name</th>
                                <th className="result-window__table-header">Location</th>
                                <th className="result-window__table-header">Days until admissions</th>
                                <th className="result-window__table-close">2</th>
                            </tr>
                            <tr>
                                <td className="result-window__table-margin">1</td>
                                <td className="result-window__table-cell">Name</td>
                                <td className="result-window__table-cell">Name</td>
                                <td className="result-window__table-cell">Location</td>
                                <td className="result-window__table-cell">Days until admissions</td>
                                <td className="result-window__table-margin">2</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}