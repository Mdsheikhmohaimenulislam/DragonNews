import React from 'react';
import swimming from '../../public/swimming.png';
import classImage from '../../public/class.png';
import playGround from '../../public/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-semibold mb-3'>Q-Zone</h1>
            <div>
                <img src={swimming} alt="Swimming" />
                <img src={classImage} alt="Class" />
                <img src={playGround} alt="Play Ground" />
            </div>
        </div>
    );
};

export default QZone;