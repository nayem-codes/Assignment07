import React from 'react';
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

const Footer = () => {
    return (
        <div className='bg-green-900 mt-8'>
            <div className='container mx-auto text-white text-center '>
                <h2 className='font-extrabold text-3xl pt-20'>KeenKeeper</h2>
                <p className='mt-4 mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p>Social Links</p>
                <div className='flex gap-3 justify-center items-center mx-auto w-5 h-5 mt-4'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </div>

                <div className='container mx-auto flex justify-between mt-16 pb-7'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-3'>
                        <p>Privacy Policy</p>
                        <p> Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;