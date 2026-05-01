import React from 'react';
import Banner from '../../components/shared/homepage/Banner';
import Stats from '../../components/shared/homepage/Stats';
import Friends from '../../components/shared/homepage/Friends';
import { useLoaderData } from 'react-router';

const Homepage = () => {
    const data = useLoaderData()
    console.log(data, 'data from homepage');
    return (
        <>
            <Banner />
            <Stats />
            <Friends/>
        </>
    );
};

export default Homepage;