import React from 'react';
import Container from '../Container';

const OverViewPageContainer = ({ img, h1, p, rowReverse }) => {
    return (
        <Container>
            <div className={`flex items-center justify-between py-8  ${rowReverse ? 'flex-row-reverse' : ' '}`}>
                <div className='w-[48%] '>
                    <img src={img} className='w-full' alt="" />
                </div>
                <div className='w-[48%] text-white '>
                    <h1 className='text-4xl '>{h1}</h1>
                    <p className='py-4'>{p}</p>
                    <button className="btn text-white">Learn more</button>
                </div>
            </div>
        </Container >
    );
};

export default OverViewPageContainer;