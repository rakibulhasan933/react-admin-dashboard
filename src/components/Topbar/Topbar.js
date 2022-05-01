import { Language, Notifications, Settings } from '@material-ui/icons';
import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className='topBar'>
            <div className="topWrapper">
                <div className="topLeft">
                    <span className="logo">Rakibul</span>
                </div>
                <div className="topRight">
                    <div className="topIconContainer">
                        <Notifications />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topIconContainer">
                        <Language />
                    </div>
                    <div className="topIconContainer">
                        <Settings />
                    </div>
                    <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="profile" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;