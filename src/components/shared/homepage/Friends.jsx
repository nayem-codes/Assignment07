import React, { use, useEffect, useState } from 'react';
import Apps from '../../../pages/apps/Apps';
import useFriends from '../../../hooks/useFriends';
import { Link } from 'react-router';


// const friendsPromise = fetch('/data.json').then(res => res.json());

const Friends = () => {

    // const friends = use(friendsPromise)

    const { friends, loading } = useFriends();
    console.log(friends);

    return (
        <div >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 bg-base-200'>

                {
                    friends.map((friend, ind) => {
                        return (
                            <Link to={`/apps/${friend.id}`} className=''>
                                <div className="card bg-white w-96 shadow-sm p-6 container mx-auto">
                                    <figure>
                                        <img className='rounded-full'
                                            src={friend.picture} />
                                    </figure>
                                    <div className="card-body flex flex-col items-center ">
                                        <h2 className="card-title">{friend.name}</h2>
                                        <p>{friend.days_since_contact}d ago</p>
                                        <div className="card-actions flex flex-col justify-center items-center">
                                            <span className='badge py-3.5 font-semibold bg-green-200 text-green-900'>{friend.tags}</span>
                                            <span className={`text-white  py-3.5 font-semibold ${friend.status === "overdue" ? "badge badge-error" : friend.status === "almost due" ? "badge badge-warning" : "badge bg-green-900"}`}>{friend.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>

        </div>
    );
};

export default Friends;