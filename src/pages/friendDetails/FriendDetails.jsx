import React, { use, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { CallFriendContext } from '../../context/CallFriendContext';
import InstallApps from '../installApps/InstallApps';

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


    setInstallApps([...InstallApps, newData])
   }

    return (
        <div className='bg-base-200'>

            <div className='flex gap-6 bg-base-200 container mx-auto'>

                <div className='left container mx-auto flex flex-col items-center space-y-2 w-87.5'>
                    <div className='card bg-white w-96 shadow-sm p-6 container mx-auto flex flex-col items-center '>
                        <img className='rounded-full' src={expectedFriend.picture} alt="" />
                        <h2 className='card-title'>{expectedFriend.name}</h2>
                        <span className={`text-white  py-3.5 font-semibold ${expectedFriend.status === "overdue" ? "badge badge-error" : expectedFriend.status === "almost due" ? "badge badge-warning" : "badge bg-green-900"}`}>{expectedFriend.status}</span>
                        <span className='badge py-3.5 font-semibold bg-green-200 text-green-900'>{expectedFriend.tags}</span>
                    </div>

                    <button className='btn bg-white w-full'>Snooze 2 weeks</button>
                    <button className='btn bg-white w-full'>Archive</button>
                    <button className='btn bg-white w-full'>Delete</button>

                </div>

                <div className='right'>

                    <div className="flex gap-2">
                        <div className="card card-border bg-base-100 w-96 flex flex-col item-center">
                            <div className="card-body">
                                <h2 className="card-title">{expectedFriend.days_since_contact}</h2>
                                <p>Days Since Contact</p>
                            </div>
                        </div>
                        <div className="card card-border bg-base-100 w-96">
                            <div className="card-body">
                                <h2 className="card-title">{expectedFriend.days_since_contact}</h2>
                                <p>Days Since Contact</p>
                            </div>
                        </div>
                        <div className="card card-border bg-base-100 w-96">
                            <div className="card-body">
                                <h2 className="card-title">{expectedFriend.days_since_contact}</h2>
                                <p>Days Since Contact</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-border bg-base-100 w-full flex flex-col item-center">
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title">Relationship Goal</h2>
                                <button className='btn'>Edit</button>
                            </div>
                            <p>Connect every 30 days</p>
                        </div>
                    </div>

                    <div className="card card-border bg-base-100 w-full flex flex-col item-center">
                        <div className="card-body">
                            <p>Quick Check-In</p>

                            <div className='flex gap-2'>

                                <button onClick={()=> handleAction("call", expectedFriend)} className='btn'>Call</button>
                                <button onClick={()=> handleAction("text", expectedFriend)} className='btn'>Text</button>
                                <button onClick={()=> handleAction("video", expectedFriend)} className='btn'>Video</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;