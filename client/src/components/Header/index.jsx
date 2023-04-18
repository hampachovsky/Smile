import React, { useState } from 'react';
import logo from '../../images/logo.png';
import girl from '../../images/girl.png';
import tools from '../../images/tools.png';
import './index.scss';

import { OrderCall } from '../OrderCall';
import { DoctorAppointment } from '../DoctorAppointment';

export const Header = () => {
    const [openOrderCall, setOpenOrderCall] = useState(false);
    const [openDoctorAppointment, setOpenDoctorAppointment] = useState(false);

    const toggleOpenOrderCall = () => {
        setOpenOrderCall(!openOrderCall);
    };

    const toggleOpenDoctorAppointment = () => {
        setOpenDoctorAppointment(!openDoctorAppointment);
    };
    return (
        <header className='header'>
            <nav className='menu'>
                <div className='container'>
                    <div className='menu__wrapper'>
                        <a href='./' className='logo'>
                            <img src={logo} alt='Smile' className='logo__img' />
                        </a>
                        <ul className='menu__list'>
                            <li className='menu__item'>
                                <a href='#services' className='menu__link'>
                                    Послуги
                                </a>
                            </li>
                            <li className='menu__item'>
                                <a href='#prices' className='menu__link'>
                                    Ціни
                                </a>
                            </li>
                            <li className='menu__item'>
                                <a href='#doctors' className='menu__link'>
                                    Лікарі
                                </a>
                            </li>
                            <li className='menu__item'>
                                <a href='#about-us' className='menu__link'>
                                    Про нас
                                </a>
                            </li>
                            <li className='menu__item'>
                                <a href='#contacts' className='menu__link'>
                                    Контакти
                                </a>
                            </li>
                            <li className='menu__item'>
                                <a href='#reviews' className='menu__link'>
                                    Відгуки
                                </a>
                            </li>
                        </ul>
                        <button
                            className='menu__order-call'
                            type='button'
                            onClick={toggleOpenOrderCall}
                        >
                            Замовити дзвінок
                        </button>
                        {openOrderCall && <OrderCall handleClose={toggleOpenOrderCall} />}
                    </div>
                </div>
            </nav>
            <div className='header__wrapper'>
                <div className='container'>
                    <div className='header__content'>
                        <div>
                            <h1 className='header__title title1'>
                                Довірте свою посмішку професіоналам
                            </h1>
                            <p className='header__description'>
                                Ми надаємо комплексне лікуванння стоматологічних захворювань з
                                гарантією гарантією високо результату. <br /> Допомагати ваші
                                зуби-наша місія
                            </p>
                            <button
                                className='header__sign-up'
                                type='button'
                                onClick={toggleOpenDoctorAppointment}
                            >
                                Записатися
                            </button>
                        </div>
                        <div className='header__girl'>
                            <div className='circle'></div>
                            <img src={girl} alt='Дівчина' className='girl' />
                        </div>
                    </div>
                </div>
                <img src={tools} alt='Інструменти' className='header__tools' />
                {openDoctorAppointment && (
                    <DoctorAppointment handleClose={toggleOpenDoctorAppointment} />
                )}
            </div>
        </header>
    );
};
