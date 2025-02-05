
"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowBigUp, Clock, UserCircle } from 'lucide-react'

import './Card.css'

export default function RisingCard({ itemData }) {

    return (

<div className="card rising">
            <h3>{itemData.subreddit}</h3>
            <div className="card-basic">
                <MembersGrowthChart data={itemData} />
                <div className='flex-end gap-5 text-purple-400'>
                    <div className='flex items-center gap-1 inline-block text-#fdd'><Clock size={17}/>Created: {itemData.crea_date}</div>
                    <div className='flex items-center gap-1 inline-block text-#fdd'><UserCircle size={17}/>Members{itemData.members_last_week[1]}</div>
                </div>
            </div>
        </div>
    )
}






function MembersGrowthChart ({ data }){
    // Transform the data into a format suitable for Recharts
    const chartData = Object.keys(data.members_last_week).map(date => ({
        date,
        members: data.members_last_week[date]
    }));


    const formatYAxisTick = (value: number) => {
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(1)}M`; // Convert to millions (e.g., 4.0M)
        } else if (value >= 1000) {
            return `${(value / 1000).toFixed(0)}k`; // Convert to thousands (e.g., 400k)
        } else {
            return value.toString(); // Keep small numbers as is
        }
    };

    console.log('chartData',chartData)
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart
                data={chartData}
                margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[dataMin => Math.floor(dataMin * 0.99), dataMax => Math.ceil(dataMax * 1.02)]}  tickFormatter={formatYAxisTick}  /> 
                {/* <YAxis domain={[0,10]} tickCount={6} tick={[0, 2, 4, 6, 8, 10]} /> */}

                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="members" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};