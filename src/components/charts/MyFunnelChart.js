import React from 'react';
import { Funnel, FunnelChart, LabelList, Tooltip } from 'recharts';
const data = [
    {
        "index": 0,
        "month": "Mar",
        "investment": 100000,
        "sell": 24100,
        "revenue": 10401,
        "fill": "violet"
    },
    {
        "index": 1,
        "month": "Apr",
        "investment": 200000,
        "sell": 42300,
        "revenue": 24500,
        "fill": "skyblue"
    },
    {
        "index": 2,
        "month": "May",
        "investment": 500000,
        "sell": 72600,
        "revenue": 67010,
        "fill": "lightcoral"
    },
    {
        "index": 3,
        "month": "Jun",
        "investment": 500000,
        "sell": 52900,
        "revenue": 40405,
        "fill": "yellowgreen"
    },
    {
        "index": 4,
        "month": "Jul",
        "investment": 600000,
        "sell": 60100,
        "revenue": 50900,
        "fill": "orange"
    },
    {
        "index": 5,
        "month": "Aug",
        "investment": 700000,
        "sell": 67000,
        "revenue": 61000,
        "fill": "gray"
    }
]

const MyFunnelChart = () => {
    return (
        <div className='bg-gray-200 pt-16 px-10 rounded-lg border-2 text-center sm:my-2'>
            <p>Funnel Chart</p>
            <FunnelChart width={500} height={300}>
                <Tooltip />
                <Funnel
                    dataKey="investment"
                    data={data}
                    isAnimationActive
                >
                    <LabelList position="right" fill="#000" stroke="none" dataKey="month" />
                </Funnel>
            </FunnelChart>
        </div>
    );
};

export default MyFunnelChart;