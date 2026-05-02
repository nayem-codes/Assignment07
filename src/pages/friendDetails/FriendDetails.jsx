import React, { use, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { CallFriendContext } from '../../context/CallFriendContext';
import InstallApps from '../installApps/InstallApps';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { IoArchiveOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const FriendDetails = () => {

    const { id } = useParams();
    const { friends, loading } = useFriends();
    console.log(friends, loading)

    const expectedFriend = friends.find(friend => friend.id == id)
    console.log(expectedFriend);

    const { InstallApps, setInstallApps } = useContext(CallFriendContext);

    if (loading) return <p>Loading...</p>;
    if (!expectedFriend) return <p>Friend not found</p>;

   const handleAction = (type, friendDetail) => {

    const newData = {
        ...friendDetail, 
        action: type, 
        time: new Date().toString(),
    };


    setInstallApps([...InstallApps, newData]);

    toast.success(`${newData.action}ed ${expectedFriend.name}`)
   }

    return (
        <div className='bg-base-200 min-h-screen'>

            <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6 flex-wrap justify-center pt-20 '>

                <div className='left flex flex-1 flex-col items-center space-y-4 w-full lg:w-[320px] h-full'>
                    <div className='card bg-white w-full shadow-sm p-6 container mx-auto flex flex-col items-center '>
                        <img className='rounded-full' src={expectedFriend.picture} alt="" />
                        <h2 className='card-title'>{expectedFriend.name}</h2>
                        <span className={`text-white  py-3.5 font-semibold my-2 ${expectedFriend.status === "overdue" ? "badge badge-error" : expectedFriend.status === "almost due" ? "badge badge-warning" : "badge bg-green-900 "}`}>{expectedFriend.status}</span>
                        <span className='badge py-3.5 font-semibold bg-green-200 text-green-900'>{expectedFriend.tags}</span>
                        <p className='text-center text-gray-500 mt-3'>{expectedFriend.bio}</p>
                    </div>

                    <button className='btn bg-white w-full'><RiNotificationSnoozeLine /> Snooze 2 weeks</button>
                    <button className='btn bg-white w-full'><IoArchiveOutline /> Archive</button>
                    <button className='btn bg-white w-full text-red-500'><RiDeleteBin6Line /> Delete</button>

                </div>

                <div className='right flex-2 h-full  space-y-6'>

                    <div className="flex gap-2">
                        <div className="card card-border bg-base-100 w-full">
                            <div className="card-body flex flex-col items-center">
                                <h2 className="card-title font-semibold text-3xl text-green-900">{expectedFriend.days_since_contact}</h2>
                                <p>Days Since Contact</p>
                            </div>
                        </div>
                        <div className="card card-border bg-base-100 w-full">
                            <div className="card-body flex flex-col items-center">
                                <h2 className="card-title font-semibold text-3xl text-green-900">{expectedFriend.goal}</h2>
                                <p>Goal (Days)</p>
                            </div>
                        </div>
                        <div className="card card-border bg-base-100 w-full">
                            <div className="card-body flex flex-col items-center">
                                <h2 className="card-title font-semibold text-3xl text-green-900">{expectedFriend.next_due_date}</h2>
                                <p>Next Due</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-border bg-base-100 w-full flex flex-col item-center">
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title text-green-900 font-medium">Relationship Goal</h2>
                                <button className='btn'>Edit</button>
                            </div>
                            <p>Connect every <span className='font-bold'>30 days</span></p>
                        </div>
                    </div>

                    <div className="card card-border bg-base-100 w-full flex flex-col item-center">
                        <div className="card-body">
                            <p className='text-xl font-medium text-green-900'>Quick Check-In</p>

                            <div className='grid grid-cols-3 gap-3'>

                                <button onClick={()=> handleAction("call", expectedFriend)} className='btn flex flex-col p-4 w-full h-auto    '><FaPhone /> Call</button>
                                <button onClick={()=> handleAction("text", expectedFriend)} className='btn flex flex-col p-4 w-full h-auto'><MdMessage /> Text</button>
                                <button onClick={()=> handleAction("video", expectedFriend)} className='btn flex flex-col p-4 w-full h-auto'><FaVideo />Video</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;