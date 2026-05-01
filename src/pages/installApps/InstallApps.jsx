import React, { useContext } from 'react';
import { CallFriendContext } from '../../context/CallFriendContext';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const InstallApps = () => {
    const { InstallApps, setInstallApps } = useContext(CallFriendContext)


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

    return (

        <div>
            {
                InstallApps.map((friend, ind) => {
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