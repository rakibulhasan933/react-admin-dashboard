import React from 'react';
import './WidgetLg.css';

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTittle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rakibul</span>
                    </td>
                    <td className="widgetLgDate">2 April 2022</td>
                    <td className="widgetLgAmount">$200</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rakibul</span>
                    </td>
                    <td className="widgetLgDate">2 April 2022</td>
                    <td className="widgetLgAmount">$200</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.ibb.co/GWDpDmY/IMG-3724.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rakibul</span>
                    </td>
                    <td className="widgetLgDate">2 April 2022</td>
                    <td className="widgetLgAmount">$200</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetLg;