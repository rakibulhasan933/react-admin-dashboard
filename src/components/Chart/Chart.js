import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = () => {
    const data = [
        {
            name: 'Jan',
            "Active User": 4000
        },
        {
            name: 'Feb',
            "Active User": 3000
        },
        {
            name: 'Mac',
            "Active User": 5000
        },
        {
            name: 'Apr',
            "Active User": 3000
        },
        {
            name: 'May',
            "Active User": 2000
        },
        {
            name: 'Jun',
            "Active User": 4000
        },
        {
            name: 'Jul',
            "Active User": 4000
        },
        {
            name: 'Aug',
            "Active User": 4000
        },
        {
            name: 'Sep',
            "Active User": 3000
        },
        {
            name: 'Oct',
            "Active User": 4000
        },
        {
            name: 'Nov',
            "Active User": 2000
        },
        {
            name: 'Dec',
            "Active User": 4000
        }

    ];
    return (
        <div className='chart'>
            <h3 className="chartItem">Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <Line type='monotone' dataKey='Active User' stroke='#5550bd' />
                    <Tooltip />
                    <CartesianGrid stroke='#5550bd' strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;