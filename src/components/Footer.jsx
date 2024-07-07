import React from 'react';

const Footer = () => {
    return (
        <div className='bg-darkBlack mt-16'>
            <div className='flex justify-between items-center h-20 container mx-auto'>
                <h2 className='text-3xl text-white font-bold'>Logo</h2>
                <p className='text-base text-white'>CopyRight 2024 💚 © Develop by Apu Fouzder</p>
                <div className='flex items-center gap-4'>
                    <a href="#" className='bg-primary p-2 rounded-full'>♻</a>
                    <a href="#" className='bg-primary p-2 rounded-full'>♻</a>
                    <a href="#" className='bg-primary p-2 rounded-full'>♻</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;