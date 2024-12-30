import React from 'react';

const CoverLetter = () => {
    return (
        <div className='container text-center mt-5'>
            <img src={`${process.env.PUBLIC_URL}/2.png`} alt='Cover Letter' className='img-fluid' />
        </div>
    );
};

export default CoverLetter;