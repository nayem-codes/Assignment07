import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from 'react-router';
import { HiMenu } from "react-icons/hi";

const Navbar = () => {

    const linkClass = ({ isActive }) =>
        `flex items-center gap btn ${
            isActive
                ? "bg-green-900 text-white"
                : "bg-transparent text-black"
        }`;

    const navLinks = (
        <>
            <li>
                <NavLink to={"/"} className={linkClass}>
                    <RiHome2Line /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/installApps"} className={linkClass}>
                    <CiClock2 /> Timeline
                </NavLink>
            </li>
            <li>
                <NavLink to={"/dashboard"} className={linkClass}>
                    <ImStatsDots /> Stats
                </NavLink>
            </li>
        </>
    );

    return (
        <div className='shadow-sm bg-base-100'>
            <div className="navbar container mx-auto px-4">

                {/* LEFT → LOGO */}
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">
                        Keen<span className='text-green-900'>Keeper</span>
                    </a>
                </div>

                {/* RIGHT SIDE */}
                <div className="navbar-end">

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2">
                            {navLinks}
                        </ul>
                    </div>

                    {/* MOBILE MENU ICON */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <HiMenu size={22} />
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;