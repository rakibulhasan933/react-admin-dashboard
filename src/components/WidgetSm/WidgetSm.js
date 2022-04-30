import React from 'react';
import './WidgetSm.css';
import { Visibility } from '@mui/icons-material';

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTittle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="man" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rakibul hasan</span>
                        <span className="widgetSmUserTittle">Software Engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Visibility className='widgetsIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="man" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rakibul hasan</span>
                        <span className="widgetSmUserTittle">Software Engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Visibility className='widgetsIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="man" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rakibul hasan</span>
                        <span className="widgetSmUserTittle">Software Engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Visibility className='widgetsIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="man" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rakibul hasan</span>
                        <span className="widgetSmUserTittle">Software Engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Visibility className='widgetsIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="man" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rakibul hasan</span>
                        <span className="widgetSmUserTittle">Software Engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Visibility className='widgetsIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;