import React from 'react';

const SectionHeading = ({heading, text}) => {
    return (
        <div className='text-center mb-12'>
            <h1 className='md:text-5xl text-2xl font-semibold mb-7'>{heading}</h1>
            <p className='text-secondary text-lg'>{ text}</p>
        </div>
    );
};

export default SectionHeading;