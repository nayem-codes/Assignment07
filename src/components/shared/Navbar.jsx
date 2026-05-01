import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { Link, NavLink } from 'react-router';


const Navbar = () => {

    // const navItems = [
    //     {
    //         path: "/",
    //         text: "Home"
    //     },
    //     {
    //         path: "/apps",
    //         text: "apps"
    //     },
    //     {
    //         path: "/installApps",
    //         text: "Install"
    //     }
    // ]
    return (
        <div className='shadow-sm bg-base-100'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">Keen<span  className='text-green-900'>Keeper</span></a>
                </div>

                <div className="navbar-end">
                    {/* {
                        navItems.map((item) => <NavLink className={({ isActive }) => `btn flex items-center gap ${isActive ? "bg-green-900 text-white" : "bg-transparent text-black"}`} to={item.path}><RiHome2Line /> {item.text}</NavLink>)
                    } */}

                    <NavLink className={({ isActive }) => `btn flex items-center gap ${isActive ? "bg-green-900 text-white" : "bg-transparent text-black"}`} to={"/"}><RiHome2Line /> Home</NavLink>

                    <NavLink className={({ isActive }) => `btn flex items-center gap ${isActive ? "bg-green-900 text-white" : "bg-transparent text-black"}`} to={"/installApps"}><CiClock2 />Timeline</NavLink>

                    <NavLink className={({ isActive }) => `btn flex items-center gap ${isActive ? "bg-green-900 text-white" : "bg-transparent text-black"}`} to={"/installApps"}><ImStatsDots /> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;