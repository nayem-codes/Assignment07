import React from 'react';

const Stats = () => {
    return (
        <div className='bg-base-200'>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 bg-base-200 container mx-auto pt-10'>
                <div className='bg-white shadow p-8 text-center rounded-md'>
                    <p className='font-semibold text-3xl text-green-900'>8</p>
                    <p>Total friends</p>
                </div>
                <div className='bg-white shadow p-8 text-center rounded-md'>
                    <p className='font-semibold text-3xl text-green-900'>6</p>
                    <p>On Track</p>
                </div>
                <div className='bg-white shadow p-8 text-center rounded-md'>
                    <p className='font-semibold text-3xl text-green-900'>2</p>
                    <p>Need Attention</p>
                </div>
                <div className='bg-white shadow p-8 text-center rounded-md'>
                    <p className='font-semibold text-3xl text-green-900'> 8</p>
                    <p>Interactions This Month</p>
                </div>


            </div>
        </div>
    );
};

export default Stats;