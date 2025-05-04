import React from 'react';
import SocialLogin from '../HomeLaout/SocialLogin';
import FindUsOn from './FindUsOn';
import QZone from './QZone';

const Right_Nav = () => {
    return (
        <div className='space-y-7'>
            <SocialLogin/>
            <FindUsOn/>
            <QZone/>
        </div>
    );
};

export default Right_Nav;