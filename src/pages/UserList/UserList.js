import { Button } from '@material-ui/core';
import React from 'react';
import './UserList.css';
import { DeleteOutlined } from '@material-ui/icons';

const UserList = () => {
    return (
        <div className='userList'>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer Name</th>
                    <th className="widgetLgTh">Email</th>
                    <th className="widgetLgTh">Gender</th>
                    <th className="widgetLgTh">Age</th>
                    <th className="widgetLgTh">Phone</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rakibul</span>
                    </td>
                    <td className="widgetLgDate">rakibulmd933@gmail.com</td>
                    <td className="widgetLgDate">Male</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">01793874052</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rakibul</span>
                    </td>
                    <td className="widgetLgDate">rakibulmd933@gmail.com</td>
                    <td className="widgetLgDate">Male</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">01793874052</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rakibul</span>
                    </td>
                    <td className="widgetLgDate">rakibulmd933@gmail.com</td>
                    <td className="widgetLgDate">Male</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">01793874052</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default UserList;