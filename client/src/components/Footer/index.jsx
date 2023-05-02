import React, { useState } from 'react';
import './index.scss';

import facebook from '../../images/Facebook.svg';
import instagram from '../../images/Instagram.svg';
import telegram from '../../images/Telegram.svg';
import twitter from '../../images/Twitter.svg';
import whatsApp from '../../images/WhatsApp.svg';
import logo from '../../images/logo.png';

import { OrderCall } from '../OrderCall';

export const Footer = () => {
    const [openOrderCall, setOpenOrderCall] = useState(false);

    const toggleOpenOrderCall = () => {
        setOpenOrderCall(!openOrderCall);
    };
    return (
        <footer className='footer' id='contacts'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <a href='./' className='footer__logo'>
                        <img src={logo} alt='' className='logo' />
                    </a>
                    <div className='footer__phone'>
                        <a href='tel:0685008923'>+380685008923</a>
                        <a href='tel:0673399501'>+380673399501</a>
                    </div>
                    <div className='footer__email'>
                        <a href='mailto: helpsmile@gmail.com'>Helpsmile@gmail.com</a>
                        <a href='mailto: mysmile@gmail.com'>Mysmile@gmail.com</a>
                    </div>
                    <div className='footer__address'>
                        <p>Адреса: місто Львів</p>
                        <p>вулиця Ivana Rubchaka St 30/11</p>
                    </div>
                    <div className='footer__social'>
                        <a href='./' className='footer__social-link'>
                            <img src={whatsApp} alt='WhatsApp' />
                        </a>
                        <a href='./' className='footer__social-link'>
                            <img src={twitter} alt='Twitter' />
                        </a>
                        <a href='./' className='footer__social-link'>
                            <img src={telegram} alt='Telegram' />
                        </a>
                        <a href='./' className='footer__social-link'>
                            <img src={facebook} alt='Facebook' />
                        </a>
                        <a href='./' className='footer__social-link'>
                            <img src={instagram} alt='Instagram' />
                        </a>
                    </div>
                    <button
                        className='footer__order-call'
                        type='button'
                        onClick={toggleOpenOrderCall}
                    >
                        Замовити дзвінок
                    </button>
                    {openOrderCall && <OrderCall handleClose={toggleOpenOrderCall} />}
                </div>
            </div>
        </footer>
    );
};
