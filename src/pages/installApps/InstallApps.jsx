import React, { useContext, useState } from 'react';
import { CallFriendContext } from '../../context/CallFriendContext';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const InstallApps = () => {
    const { InstallApps } = useContext(CallFriendContext);


    const actionIcon = {
        call: <FaPhone />,
        text: <MdMessage />,
        video: <FaVideo />
    };
    const formatDate = (time) => {
        return new Date(time).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    const [filter, setFilter] = useState("all");

    const filteredData =
        filter === "all"
            ? InstallApps
            : InstallApps.filter(item => item.action === filter);

    return (

        <div>
            <h2 className='font-bold text-5xl container mx-auto pt-14 mb-6'>Timeline </h2>
            <div className='container mx-auto'>
                <div className="dropdown dropdown-start   mb-6">
                    <div tabIndex={0} role="button" className="btn m-1 w-2xs justify-start">Filter Timeline </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => setFilter("all")}>All</a></li>
                        <li><a onClick={() => setFilter("call")}>Call</a></li>
                        <li><a onClick={() => setFilter("text")}>Text</a></li>
                        <li><a onClick={() => setFilter("video")}>Video</a></li>
                    </ul>
                </div>
            </div>
            {InstallApps.length === 0 ? <h2 className='font-bold text-4xl text-center mt-10'>No friend Contacted</h2> :
                filteredData.map((friend, ind) => {
                    return <div key={ind} className='container mx-auto mb-4 '>

                        <div className='bg-base-200 p-6 rounded-md shadow  flex gap-3 items-center'>
                            <div>
                                {actionIcon[friend.action]}
                            </div>
                            <div>
                                <h2><span className='font-bold text-green-800'>{friend.action}</span> with {friend.name}</h2>
                                <p className='text-gray-600'>{formatDate(friend.time)}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default InstallApps;