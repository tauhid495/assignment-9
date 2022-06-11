
import React from 'react';
import MyBarChart from '../charts/MyBarChart';
import MyCharts from '../charts/MyRadialChart';
import MyFunnelChart from '../charts/MyFunnelChart';
import MyLineChart from '../charts/MyLineChart';


const Analysis = () => {

    return (
        <div className='px-12 py-20 md:grid gap-10 grid-cols-2  bg-cyan-900'>
            <MyCharts />
            <MyLineChart />
            <MyBarChart />
            <MyFunnelChart />
        </div >
    );
};

export default Analysis;