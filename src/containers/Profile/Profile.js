import React, { Component } from 'react';
import './Profile.scss';
import {ProfileFormComponent} from '../../components/profile/ProfilePage'
import {ProfileQualificationsComponent} from '../../components/profile/ProfileQualificationsPage'
import {ProfileRoadmapsComponent} from '../../components/profile/ProfileRoadmapsPage'
import {ProfileSettingsComponent} from '../../components/profile/ProfileSettingsPage'
import {ProfileSideBarComponent} from '../../components/profile/ProfileSideBar'
import {ProfileStatsComponent} from '../../components/profile/ProfileStatsPage'
import {Route} from 'react-router-dom';


export class ProfileComponent extends Component {
    
    render() {

        return (
            <div className="profile">
                <ProfileSideBarComponent></ProfileSideBarComponent>
                <Route path='/profile/main' component={ProfileFormComponent}/>
                <Route path='/profile/qualifications' component={ProfileQualificationsComponent}/>
                <Route path='/profile/roadmaps' component={ProfileRoadmapsComponent}/>
                <Route path='/profile/settings' component={ProfileSettingsComponent}/>
                <Route path='/profile/stats' component={ProfileStatsComponent}/>
            </div>
        );
    }
}