import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import {
    PricesRow,
    Offer,
    Doctor,
    Review,
    LeaveReview,
    OrderCall,
    DoctorAppointment,
    AskQuestion,
} from '../../components';

import './home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import logo from '../../images/logo.png';
import girl from '../../images/girl.png';
import girl2 from '../../images/girl2.png';
import tools from '../../images/tools.png';
import servicesIcon1 from '../../images/services_icon1.png';
import servicesIcon2 from '../../images/services_icon2.png';
import servicesIcon3 from '../../images/services_icon3.png';
import servicesIcon4 from '../../images/services_icon4.png';
import servicesIcon5 from '../../images/services_icon5.png';
import servicesIcon6 from '../../images/services_icon6.png';
import servicesIcon7 from '../../images/services_icon7.png';
import servicesIcon8 from '../../images/services_icon8.png';
import aboutUs from '../../images/about-us.jpg';

import whatsApp from '../../images/WhatsApp.svg';
import twitter from '../../images/Twitter.svg';
import telegram from '../../images/Telegram.svg';
import facebook from '../../images/Facebook.svg';
import instagram from '../../images/Instagram.svg';

export const Home = () => {
    const doctorsPrevRef = useRef(null);
    const doctorsNextRef = useRef(null);
    const reviewsPrevRef = useRef(null);
    const reviewsNextRef = useRef(null);

    const service = {
        service: 'Консультація лікаря-стоматолога',
        price: '300',
        currency: 'UAH',
    };

    const [openLeaveReview, setOpenLeaveReview] = useState(false);
    const [openOrderCall, setOpenOrderCall] = useState(false);
    const [openDoctorAppointment, setOpenDoctorAppointment] = useState(false);
    const [openAskQuestion, setOpenAskQuestion] = useState(false);

    const toggleOpenLeaveReview = () => {
        setOpenLeaveReview(!openLeaveReview);
    };

    const toggleOpenOrderCall = () => {
        setOpenOrderCall(!openOrderCall);
    };

    const toggleOpenDoctorAppointment = () => {
        setOpenDoctorAppointment(!openDoctorAppointment);
    };

    const toggleOpenAskQuestion = () => {
        setOpenAskQuestion(!openAskQuestion);
    };

    return (
        <div>
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
            <div className='guarantee'>
                <div className='container'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <h3 className='guarantee__title title3'>1 рік гарантії</h3>
                            <p className='guarantee__description'>
                                На всі імплантаційні та ортодонтичні послуги
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className='guarantee__title title3'>Надійність</h3>
                            <p className='guarantee__description'>
                                Ми впевнені в якості наших послуг і піклуємося про кожного клієнта
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className='guarantee__title title3'>Особистий терапевт</h3>
                            <p className='guarantee__description'>
                                На весь час лікування у нас за вами закріплений один лікар
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className='guarantee__title title3'>Бонусна програма</h3>
                            <p className='guarantee__description'>
                                Кожен візит до нас дозволяє Вам накопичити бали та знижки.
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='services' id='services'>
                <div className='container'>
                    <h2 className='services__title title2'>Популярні послуги</h2>
                    <div className='services__wrapper'>
                        <div className='services__item'>
                            <img src={servicesIcon1} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>Видалення зубів</h3>
                            <p className='services__description'>
                                Видаляємо зуби під анестезією -лікар підбирає анестетик для кожного
                                пацієнта та конкретної процедури
                            </p>
                        </div>
                        <div className='services__item'>
                            <img src={servicesIcon2} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>Лікування пульпіту</h3>
                            <p className='services__description'>
                                Проводимо комплексу діагностику і тільки після цього приступаємо до
                                лікування зуба, що турбує вас.
                            </p>
                        </div>
                        <div className='services__item'>
                            <img src={servicesIcon3} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>Лікування карієсу</h3>
                            <p className='services__description'>
                                Визначимо проблему складемо графік візитів для лікування, а також
                                підберемо правильний домашній догляд
                            </p>
                        </div>
                        <div className='services__item'>
                            <img src={servicesIcon4} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>УЗ очищення зубів</h3>
                            <p className='services__description'>
                                Професійна гігієна УЗ-скалер дозволяє швидко і безпечно видалити
                                застарілий зубний камінь.
                            </p>
                        </div>
                        <div className='services__item'>
                            <img src={servicesIcon5} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>Протезування</h3>
                            <p className='services__description'>
                                Команда лікарів аналізує Ваш випадок і підбирає оптимальний для вас
                                варіант за термінами та вартістю
                            </p>
                        </div>
                        <div className='services__item'>
                            <img src={servicesIcon6} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>Імплантація зубів</h3>
                            <p className='services__description'>
                                Наші фахівці швидко та безболісно встановлюють протези, які
                                підходять у вашому випадку.
                            </p>
                        </div>
                        <div className='services__item'>
                            <img src={servicesIcon7} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>Лікування пародонтозу</h3>
                            <p className='services__description'>
                                Стоматолог видалить наліт і зубний камінь, а також розробить
                                індивідуальні рекомендації щодо домашнього догляду
                            </p>
                        </div>
                        <div className='services__item'>
                            <img src={servicesIcon8} alt='Зуб' className='services__img' />
                            <h3 className='services__subtitle title3'>Брекет системи</h3>
                            <p className='services__description'>
                                Подаруємо красиву посмішку і запобігаємо захворюванням, які
                                виникають через неправильне положення зубів.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='prices' id='prices'>
                <div className='container'>
                    <h2 className='prices__title title2'>Ціни</h2>
                    <p className='prices__description'>
                        Вартість видалення залежить від типу пошкодженого зуба (з одним або кількома
                        корінням) розміру, форми, розташування коріння загального стану зубної
                        одиниці(проста або складна екстракція). <br /> Остаточна ціна видалення
                        зубів буде на на прийомі у стоматолога після огляду та проведення
                        рентгендіагностики
                    </p>
                    <table className='prices__table'>
                        <thead>
                            <tr className='prices__caption'>
                                <th>Прайс стоматологічних послуг</th>
                                <th>Вартість</th>
                                <th>Валюта</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PricesRow data={service} />
                            <PricesRow data={service} />
                            <PricesRow data={service} />
                            <PricesRow data={service} />
                            <PricesRow data={service} />
                            <PricesRow data={service} />
                            <PricesRow data={service} />
                            <PricesRow data={service} />
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='offers'>
                <div className='container'>
                    <h2 className='offers__title title2'>Вигідні пропозиції</h2>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <Offer />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Offer />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Offer />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Offer />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='about-us' id='about-us'>
                <div className='container'>
                    <div className='about-us__wrapper'>
                        <div className='about-us__content'>
                            <p className='about-us__anchor'>Про клініку</p>
                            <h2 className='about-us__title title2'>
                                Ми знаємо, що потрібно вашим зубам!
                            </h2>
                            <p className='about-us__text'>
                                Наша команда переконана найдовше стояти свої зуби. Вилікувати навіть
                                найсерйозніший карієс простіше, ніж поставити імплант. Допомагати
                                зберегти ваші зуби - наша місія. Хочете дізнатися як ми це робимо?
                                Стоматологи SMILE - це новий погляд на стоматологічні послуги для
                                дорослих.
                            </p>
                            <p className='about-us__text'>
                                Ми вирішили відкинути традиційний підхід до платного лікування
                                &#34;Прийти, вилікувати та забути&#34;. Саме тому ми створили нашу
                                стоматологію, де головне - партнерські відносини з лікарем у
                                вирішенні проблем.
                            </p>
                            <button
                                className='about-us__ask'
                                type='button'
                                onClick={toggleOpenAskQuestion}
                            >
                                Поставити запитання
                            </button>
                        </div>
                        <div className='about-us__block-img'>
                            <img src={aboutUs} alt='Лікування зубів' className='about-us__img' />
                        </div>
                    </div>
                </div>
                {openAskQuestion && <AskQuestion handleClose={toggleOpenAskQuestion} />}
            </div>
            <div className='doctors' id='doctors'>
                <div className='container'>
                    <p className='doctors__anchor'>Лікарі</p>
                    <h2 className='doctors__title title2'>Наші спеціалісти</h2>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation={{
                            prevEl: doctorsPrevRef.current,
                            nextEl: doctorsNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = doctorsPrevRef.current;
                                swiper.params.navigation.nextEl = doctorsNextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                    >
                        <SwiperSlide>
                            <Doctor />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Doctor />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Doctor />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Doctor />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Doctor />
                        </SwiperSlide>
                    </Swiper>
                    <div className='doctors__left' ref={doctorsPrevRef} />
                    <div className='doctors__right' ref={doctorsNextRef} />
                </div>
            </div>

            <div className='reviews' id='reviews'>
                <div className='container'>
                    <p className='reviews__anchor'>Пацієнтам</p>
                    <h2 className='reviews__title title2'>Відгуки наших пацієнтів</h2>
                    <div className='reviews__wrapper'>
                        <div className='reviews__swiper'>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: reviewsPrevRef.current,
                                    nextEl: reviewsNextRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    setTimeout(() => {
                                        swiper.params.navigation.prevEl = reviewsPrevRef.current;
                                        swiper.params.navigation.nextEl = reviewsNextRef.current;
                                        swiper.navigation.destroy();
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                }}
                            >
                                <SwiperSlide>
                                    <Review />
                                    <Review />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Review />
                                    <Review />
                                </SwiperSlide>
                            </Swiper>
                            <div className='reviews__navigation'>
                                <div className='reviews__left' ref={reviewsPrevRef} />
                                <button
                                    className='reviews__leave'
                                    type='button'
                                    onClick={toggleOpenLeaveReview}
                                >
                                    Залишити відгук
                                </button>
                                <div className='reviews__right' ref={reviewsNextRef} />
                            </div>
                        </div>
                        <div className='reviews__girl'>
                            <img src={girl2} alt='Дівчина' className='reviews__img' />
                        </div>
                    </div>
                </div>
                {openLeaveReview && <LeaveReview handleClose={toggleOpenLeaveReview} />}
            </div>
            <div className='map'>
                <div className='mapouter'>
                    <div className='gmap_canvas'>
                        <iframe
                            title='location'
                            src='https://maps.google.com/maps?q=%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%20%D0%86%D0%B2%D0%B0%D0%BD%D0%B0%20%D0%A0%D1%83%D0%B1%D1%87%D0%B0%D0%BA%D0%B0%2030/11&t=&z=19&ie=UTF8&iwloc=&output=embed'
                        ></iframe>
                    </div>
                </div>
            </div>
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
                        <button className='footer__order-call' type='button'>
                            Замовити дзвінок
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};
