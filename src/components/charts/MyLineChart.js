import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        "index": 0,
        "month": "Mar",
        "investment": 100000,
        "sell": 24100,
        "revenue": 10401
    },
    {
        "index": 1,
        "month": "Apr",
        "investment": 200000,
        "sell": 42300,
        "revenue": 24500
    },
    {
        "index": 2,
        "month": "May",
        "investment": 500000,
        "sell": 72600,
        "revenue": 67010
    },
    {
        "index": 3,
        "month": "Jun",
        "investment": 500000,
        "sell": 52900,
        "revenue": 40405
    },
    {
        "index": 4,
        "month": "Jul",
        "investment": 600000,
        "sell": 60100,
        "revenue": 50900
    },
    {
        "index": 5,
        "month": "Aug",
        "investment": 700000,
        "sell": 67000,
        "revenue": 61000
    }
]

const MyLineChart = () => {
    return (

        <div className='bg-gray-200 pt-16 px-10 rounded-lg border-2 text-center sm:my-2'>
            <p>Line Chart</p>
            < LineChart width={450} height={300} data={data} >
                <CartesianGrid strokeDasharray={'3 3'} />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={'revenue'} stroke="#8884d8"></Line>
                <Line type="monotone" dataKey={'sell'} stroke="orangered"></Line>
            </LineChart>
        </div>

    );
};

export default MyLineChart;