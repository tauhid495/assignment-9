import React from 'react';
import { Legend, RadialBar, RadialBarChart, Tooltip, } from 'recharts';

const data = [
    {
        "index": 0,
        "name": "Mar",
        "investment": 100000,
        "sell": 24100,
        "revenue": 10401,
        "fill": "violet"
    },
    {
        "index": 1,
        "name": "Apr",
        "investment": 200000,
        "sell": 42300,
        "revenue": 24500,
        "fill": "blue"
    },
    {
        "index": 2,
        "name": "May",
        "investment": 500000,
        "sell": 72600,
        "revenue": 67010,
        "fill": "green"
    },
    {
        "index": 3,
        "name": "Jun",
        "investment": 500000,
        "sell": 52900,
        "revenue": 40405,
        "fill": "yellowgreen"
    },
    {
        "index": 4,
        "name": "Jul",
        "investment": 600000,
        "sell": 60100,
        "revenue": 50900,
        "fill": "orange"
    },
    {
        "index": 5,
        "name": "Aug",
        "investment": 700000,
        "sell": 67000,
        "revenue": 61000,
        "fill": "gray"
    }
]

const MyCharts = () => {

    return (
        <div className='bg-gray-200 pt-16 px-10 rounded-lg border-2 text-center sm:my-2'>

            <p>Redial Chart</p>
            <RadialBarChart
                width={500}
                height={300}
                innerRadius="30%"
                outerRadius="100%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='sell' />
                <Legend iconSize={13} width={70} height={100} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
            </RadialBarChart>

        </div >
    );
};

export default MyCharts;