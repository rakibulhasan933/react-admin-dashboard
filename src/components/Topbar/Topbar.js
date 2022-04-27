import React from 'react';
import './Topbar.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Language, Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topWrapper">
                <div className="topLeft">
                    <span className="logo">Rakibul</span>
                </div>
                <div className="topRight">
                    <div className="topIconContainer">
                        <NotificationsNoneOutlinedIcon />
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

export default Topbar;