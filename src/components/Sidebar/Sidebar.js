import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTittle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link style={{ textDecoration: "none" }} to='/'><li className="sidebarListItem ">
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li></Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTittle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link style={{ textDecoration: "none" }} to='/user'><li className="sidebarListItem ">
                            <PermIdentity className='sidebarIcon' />
                            Users
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon' />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTittle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTittle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;