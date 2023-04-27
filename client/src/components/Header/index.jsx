/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import logo from '../../images/logo.png';
import girl from '../../images/girl.png';
import tools from '../../images/tools.png';
import phone from '../../images/phone.png';

import './index.scss';

import { OrderCall } from '../OrderCall';
import { DoctorAppointment } from '../DoctorAppointment';

export const Header = () => {
    const [openOrderCall, setOpenOrderCall] = useState(false);
    const [openDoctorAppointment, setOpenDoctorAppointment] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const toggleOpenOrderCall = () => {
        setOpenOrderCall(!openOrderCall);
    };

    const toggleOpenDoctorAppointment = () => {
        setOpenDoctorAppointment(!openDoctorAppointment);
    };

    const onToggle = () => {
        document.querySelector('.menu__container').classList.toggle('active');
        document.body.classList.toggle('hidden');
    };

    const toggleOpen = () => {
        setOpen(false);
    };

    return (
        <header className='header'>
            <nav className='menu'>
                <div className='container'>
                    <div className='menu__wrapper'>
                        <a href='./' className='logo'>
                            <img src={logo} alt='Smile' className='logo__img' />
                        </a>
                        <div className='menu__container'>
                            <ul className='menu__list'>
                                <li className='menu__item'>
                                    <a
                                        href='#services'
                                        className='menu__link'
                                        onClick={() => {
                                            onToggle();
                                            toggleOpen();
                                        }}
                                    >
                                        Послуги
                                    </a>
                                </li>
                                <li className='menu__item'>
                                    <a
                                        href='#prices'
                                        className='menu__link'
                                        onClick={() => {
                                            onToggle();
                                            toggleOpen();
                                        }}
                                    >
                                        Ціни
                                    </a>
                                </li>
                                <li className='menu__item'>
                                    <a
                                        href='#doctors'
                                        className='menu__link'
                                        onClick={() => {
                                            onToggle();
                                            toggleOpen();
                                        }}
                                    >
                                        Лікарі
                                    </a>
                                </li>
                                <li className='menu__item'>
                                    <a
                                        href='#about-us'
                                        className='menu__link'
                                        onClick={() => {
                                            onToggle();
                                            toggleOpen();
                                        }}
                                    >
                                        Про нас
                                    </a>
                                </li>
                                <li className='menu__item'>
                                    <a
                                        href='#contacts'
                                        className='menu__link'
                                        onClick={() => {
                                            onToggle();
                                            toggleOpen();
                                        }}
                                    >
                                        Контакти
                                    </a>
                                </li>
                                <li className='menu__item'>
                                    <a
                                        href='#reviews'
                                        className='menu__link'
                                        onClick={() => {
                                            onToggle();
                                            toggleOpen();
                                        }}
                                    >
                                        Відгуки
                                    </a>
                                </li>
                            </ul>
                            <ul className='menu__info'>
                                <li className='menu__info-item'>
                                    <svg
                                        width='14'
                                        height='14'
                                        viewBox='0 0 14 14'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <g clipPath='url(#clip0_483_356)'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M4.03572 2.0403C4.00506 2.01393 3.96585 1.99961 3.92541 2.00001L3.91557 2.00011L2.16629 2.00006C2.14322 2.00011 2.12042 2.00495 2.09933 2.01427C2.07816 2.02362 2.05917 2.03727 2.04357 2.05436C2.02797 2.07145 2.0161 2.0916 2.00872 2.11353C2.00181 2.13405 1.99896 2.15571 2.00034 2.17729C2.17657 3.82017 2.73644 5.39869 3.63485 6.78552L3.63961 6.79288C4.45649 8.07841 5.54636 9.16833 6.83189 9.98521L6.83969 9.99017C8.21975 10.8851 9.78997 11.4448 11.4249 11.6245C11.4463 11.6258 11.4678 11.6229 11.4881 11.616C11.5101 11.6086 11.5303 11.5966 11.5474 11.5809C11.5645 11.5652 11.5782 11.5462 11.5875 11.5249C11.5967 11.5036 11.6015 11.4807 11.6014 11.4574L11.6014 11.4534V9.70339C11.6014 9.70236 11.6014 9.70133 11.6014 9.70031C11.6014 9.69307 11.6015 9.68582 11.6017 9.67859C11.6027 9.63772 11.5887 9.5979 11.5623 9.56671C11.5363 9.53611 11.5003 9.51591 11.4607 9.50976C10.8282 9.42583 10.2071 9.27086 9.6093 9.04779L9.60704 9.04694C9.57721 9.03573 9.5448 9.0333 9.51363 9.03995C9.48298 9.04649 9.4548 9.06153 9.43233 9.08335L8.69434 9.82133C8.37603 10.1396 7.88426 10.206 7.49294 9.98352C5.87607 9.06414 4.53732 7.72539 3.61794 6.10852C3.39543 5.71719 3.46181 5.22543 3.78013 4.90712L4.51808 4.16916C4.53991 4.14668 4.55497 4.11849 4.56151 4.08782C4.56815 4.05666 4.56573 4.02424 4.55452 3.99442L4.55367 3.99216C4.33062 3.39441 4.17566 2.77342 4.09172 2.14096C4.09142 2.13869 4.09112 2.13642 4.09082 2.13415L5.08223 2.00339L4.09208 2.14334C4.09196 2.14255 4.09185 2.14175 4.09172 2.14096C4.08562 2.10185 4.06578 2.06615 4.03572 2.0403ZM3.9114 5.66309e-05C4.43514 -0.00372844 4.9426 0.18234 5.3398 0.523932C5.73844 0.866758 5.99881 1.34284 6.07239 1.86344L6.07369 1.87263C6.13769 2.35789 6.25634 2.83437 6.42747 3.29295L5.49061 3.64254L6.42662 3.2907C6.57238 3.67845 6.60392 4.09985 6.51752 4.50498C6.43112 4.91011 6.23039 5.28198 5.93912 5.57653L5.93519 5.58051L5.75822 5.75745C6.3239 6.57118 7.03028 7.27756 7.84401 7.84324L8.02492 7.66233C8.31946 7.37106 8.69134 7.17034 9.09647 7.08394C9.5011 6.99765 9.92196 7.029 10.3093 7.17429C10.7676 7.34525 11.2438 7.46385 11.7288 7.52781L11.7378 7.52899C12.264 7.60323 12.7446 7.86833 13.0882 8.27382C13.4286 8.67565 13.611 9.18761 13.6014 9.71387V11.4518'
                                                fill='#D9D9D9'
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_483_356'>
                                                <rect width='14' height='14' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>+380685008923</p>
                                </li>
                                <li className='menu__info-item'>
                                    <svg
                                        width='14'
                                        height='14'
                                        viewBox='0 0 14 14'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M2.33341 3.33334C2.24137 3.33334 2.16675 3.40796 2.16675 3.5V10.5C2.16675 10.592 2.24137 10.6667 2.33341 10.6667H11.6667C11.7588 10.6667 11.8334 10.592 11.8334 10.5V3.5C11.8334 3.40796 11.7588 3.33334 11.6667 3.33334H2.33341ZM0.166748 3.5C0.166748 2.30339 1.1368 1.33334 2.33341 1.33334H11.6667C12.8634 1.33334 13.8334 2.30339 13.8334 3.5V10.5C13.8334 11.6966 12.8634 12.6667 11.6667 12.6667H2.33341C1.1368 12.6667 0.166748 11.6966 0.166748 10.5V3.5Z'
                                            fill='#D9D9D9'
                                        />
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M0.322621 3.54701C0.618826 3.08087 1.23682 2.94312 1.70296 3.23932L6.93144 6.56177C6.95208 6.57435 6.97578 6.58101 6.99996 6.58101C7.02415 6.58101 7.04785 6.57435 7.06848 6.56177L12.297 3.23932C12.7631 2.94312 13.3811 3.08087 13.6773 3.54701C13.9735 4.01314 13.8358 4.63114 13.3696 4.92734L8.13174 8.25577C7.79251 8.4683 7.40028 8.58101 6.99996 8.58101C6.59965 8.58101 6.20743 8.46829 5.8682 8.25575L5.86279 8.25236L0.630303 4.92734C0.164169 4.63114 0.0264152 4.01314 0.322621 3.54701Z'
                                            fill='#D9D9D9'
                                        />
                                    </svg>
                                    <p>Helpsmile@gmail.com</p>
                                </li>
                                <li className='menu__info-item'>
                                    <svg
                                        width='14'
                                        height='14'
                                        viewBox='0 0 14 14'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <rect width='14' height='14' fill='#F9F9F9' />
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M6.99992 2.16667C6.02746 2.16667 5.09483 2.55298 4.40719 3.24061C3.71956 3.92825 3.33325 4.86088 3.33325 5.83334C3.33325 7.18831 4.27039 8.69492 5.41399 9.98147C5.96234 10.5984 6.51379 11.1157 6.92926 11.4792C6.9533 11.5002 6.97686 11.5207 6.99992 11.5407C7.02297 11.5207 7.04654 11.5002 7.07058 11.4792C7.48604 11.1157 8.0375 10.5984 8.58584 9.98147C9.72945 8.69492 10.6666 7.18831 10.6666 5.83334C10.6666 4.86088 10.2803 3.92825 9.59264 3.24061C8.90501 2.55298 7.97238 2.16667 6.99992 2.16667ZM6.99992 12.8333C6.39992 13.6333 6.39971 13.6332 6.39949 13.633L6.39756 13.6316L6.3935 13.6285L6.38039 13.6186L6.33494 13.5836C6.29638 13.5537 6.24163 13.5108 6.17301 13.4556C6.03584 13.3454 5.84273 13.186 5.61225 12.9844C5.15271 12.5823 4.5375 12.0058 3.91918 11.3102C2.72945 9.97176 1.33325 7.97837 1.33325 5.83334C1.33325 4.33045 1.93027 2.88911 2.99298 1.8264C4.05569 0.763694 5.49703 0.166672 6.99992 0.166672C8.50281 0.166672 9.94415 0.763694 11.0069 1.8264C12.0696 2.88911 12.6666 4.33045 12.6666 5.83334C12.6666 7.97837 11.2704 9.97176 10.0807 11.3102C9.46234 12.0058 8.84713 12.5823 8.38759 12.9844C8.15711 13.186 7.96399 13.3454 7.82683 13.4556C7.75821 13.5108 7.70346 13.5537 7.6649 13.5836L7.61945 13.6186L7.60634 13.6285L7.60228 13.6316L7.60088 13.6326C7.60066 13.6328 7.59992 13.6333 6.99992 12.8333ZM6.99992 12.8333L7.59992 13.6333C7.24436 13.9 6.75504 13.8997 6.39949 13.633L6.99992 12.8333Z'
                                            fill='#D9D9D9'
                                        />
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M7 5.08333C6.58579 5.08333 6.25 5.41911 6.25 5.83333C6.25 6.24754 6.58579 6.58333 7 6.58333C7.41421 6.58333 7.75 6.24754 7.75 5.83333C7.75 5.41911 7.41421 5.08333 7 5.08333ZM4.25 5.83333C4.25 4.31455 5.48122 3.08333 7 3.08333C8.51878 3.08333 9.75 4.31455 9.75 5.83333C9.75 7.35211 8.51878 8.58333 7 8.58333C5.48122 8.58333 4.25 7.35211 4.25 5.83333Z'
                                            fill='#D9D9D9'
                                        />
                                    </svg>
                                    <p>м.Львів вул.Ivana Rubchaka 30/11</p>
                                </li>
                                <li className='menu__info-item'>
                                    <svg
                                        width='14'
                                        height='14'
                                        viewBox='0 0 14 14'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <g clipPath='url(#clip0_483_360)'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M7.00008 2.16667C4.3307 2.16667 2.16675 4.33063 2.16675 7C2.16675 9.66938 4.3307 11.8333 7.00008 11.8333C9.66946 11.8333 11.8334 9.66938 11.8334 7C11.8334 4.33063 9.66946 2.16667 7.00008 2.16667ZM0.166748 7C0.166748 3.22606 3.22614 0.166672 7.00008 0.166672C10.774 0.166672 13.8334 3.22606 13.8334 7C13.8334 10.774 10.774 13.8333 7.00008 13.8333C3.22614 13.8333 0.166748 10.774 0.166748 7Z'
                                                fill='#D9D9D9'
                                            />
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M7 2.5C7.55228 2.5 8 2.94772 8 3.5V6.38197L9.78055 7.27224C10.2745 7.51923 10.4748 8.1199 10.2278 8.61388C9.98077 9.10786 9.3801 9.30808 8.88612 9.06109L6.55279 7.89443C6.214 7.72504 6 7.37877 6 7V3.5C6 2.94772 6.44772 2.5 7 2.5Z'
                                                fill='#D9D9D9'
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_483_360'>
                                                <rect width='14' height='14' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>Пн - Пт 09:00 - 18:00</p>
                                </li>
                            </ul>
                            <button
                                className='menu__order-call'
                                type='button'
                                onClick={toggleOpenOrderCall}
                            >
                                Замовити дзвінок
                            </button>
                        </div>
                        <div className='menu__open'>
                            <button className='menu__phone' type='button'>
                                <img src={phone} alt='Телефон' />
                            </button>
                            <Hamburger toggled={isOpen} toggle={setOpen} onToggle={onToggle} />
                        </div>
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
                                гарантією гарантією високо результату. <br /> Допомагати зберегти
                                ваші зуби-наша місія.
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
