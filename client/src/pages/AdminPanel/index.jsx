/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from 'react';

import { LoginForm, Services, Doctors, Offers, Reviews } from './route.jsx';

import './admin.scss';

import logo from '../../images/logo.png';
import servicesIcon from '../../images/services.svg';
import doctorsIcon from '../../images/doctors.svg';
import offersIcon from '../../images/offers.svg';
import reviewsIcon from '../../images/reviews.svg';

export const AdminPanel = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    const [openBlock, setOpenBlock] = useState('services');

    const handleAuth = useCallback(() => {
        setIsAuth(true);
        localStorage.setItem('isAuth', true);
    }, []);

    const handleOpenBlock = (block) => {
        setOpenBlock(block);
    };

    return isAuth ? (
        <div className='admin'>
            <img src={logo} alt='Smile' className='logo' />
            <div className='container'>
                <nav className='menu'>
                    <ul className='menu__list'>
                        <li className='menu__item'>
                            <button onClick={() => handleOpenBlock('services')} type='button'>
                                <img src={servicesIcon} alt='Послуги' className='menu__icon' />
                                Послуги
                            </button>
                        </li>
                        <li className='menu__item'>
                            <button onClick={() => handleOpenBlock('doctors')} type='button'>
                                <img src={doctorsIcon} alt='Лікарі' className='menu__icon' />
                                Лікарі
                            </button>
                        </li>
                        <li className='menu__item'>
                            <button onClick={() => handleOpenBlock('offers')} type='button'>
                                <img src={offersIcon} alt='Пропозиції' className='menu__icon' />
                                Пропозиції
                            </button>
                        </li>
                        <li className='menu__item'>
                            <button onClick={() => handleOpenBlock('reviews')} type='button'>
                                <img src={reviewsIcon} alt='Відгуки' className='menu__icon' />
                                Відгуки
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className='admin__content'>
                    {openBlock === 'services' ? (
                        <Services />
                    ) : openBlock === 'doctors' ? (
                        <Doctors />
                    ) : openBlock === 'offers' ? (
                        <Offers />
                    ) : (
                        <Reviews />
                    )}
                </div>
            </div>
        </div>
    ) : (
        <LoginForm handleAuth={handleAuth} />
    );
};
