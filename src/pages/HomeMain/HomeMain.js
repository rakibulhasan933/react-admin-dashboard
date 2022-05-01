import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './HomeMain.css';

const HomeMain = () => {
    return (
        <div>
            <div className="container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HomeMain;