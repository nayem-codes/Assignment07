import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { CallFriendContext } from '../../context/CallFriendContext';

const Dashboard = () => {

    // ✅ Hook inside component
    const { InstallApps } = useContext(CallFriendContext);

    const counts = {
        call: 0,
        text: 0,
        video: 0
    };

    InstallApps.forEach(item => {
        if (counts[item.action] !== undefined) {
            counts[item.action]++;
        }
    });

    const data = [
        { name: "call", value: counts.call, fill: "#0088FE" },
        { name: "text", value: counts.text, fill: "#FF8843" },
        { name: "video", value: counts.video, fill: "#37A163" }
    ];

    return (
        <div>
            <h2 className='font-bold text-5xl pt-14 mb-6 container mx-auto'>Friendship Analytics</h2>
            <div className='my-10 shadow rounded-md border border-slate-300 container mx-auto'>
                <p className='text-xl font-medium text-green-900 w-full p-6'>By Interaction Type</p>
            <div className='flex justify-center h-100'>
                
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

            </div>
            </div>
        </div>
    );
};

export default Dashboard;