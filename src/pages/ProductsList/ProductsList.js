import { Button } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';
import './ProductsList.css';

const ProductsList = () => {
    return (
        <div className='userList'>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Product Name</th>
                    <th className="widgetLgTh">Price</th>
                    <th className="widgetLgTh">Active</th>
                    <th className="widgetLgTh">Stock</th>
                    <th className="widgetLgTh">Shipping VAT%/KG</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Apple</span>
                    </td>
                    <td className="widgetLgDate">200</td>
                    <td className="widgetLgDate">Yes</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">+2/Kg</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Apple</span>
                    </td>
                    <td className="widgetLgDate">200</td>
                    <td className="widgetLgDate">Yes</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">+2/Kg</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Apple</span>
                    </td>
                    <td className="widgetLgDate">200</td>
                    <td className="widgetLgDate">Yes</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">+2/Kg</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Apple</span>
                    </td>
                    <td className="widgetLgDate">200</td>
                    <td className="widgetLgDate">Yes</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">+2/Kg</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Apple</span>
                    </td>
                    <td className="widgetLgDate">200</td>
                    <td className="widgetLgDate">Yes</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">+2/kg</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Apple</span>
                    </td>
                    <td className="widgetLgDate">200</td>
                    <td className="widgetLgDate">Yes</td>
                    <td className="widgetLgAmount">20</td>
                    <td className="widgetLgAmount">+2/Kg</td>
                    <td className="widgetLgStatus">
                        <Button className='Button'><DeleteOutlined className='deletedIcon' /></Button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ProductsList;