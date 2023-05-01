import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AskQuestion, Doctor, LeaveReview, Offer, PricesRow, Review } from '../../components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './home.scss';

import aboutUs from '../../images/about-us.jpg';
import girl2 from '../../images/girl2.png';
import servicesIcon1 from '../../images/services_icon1.png';
import servicesIcon2 from '../../images/services_icon2.png';
import servicesIcon3 from '../../images/services_icon3.png';
import servicesIcon4 from '../../images/services_icon4.png';
import servicesIcon5 from '../../images/services_icon5.png';
import servicesIcon6 from '../../images/services_icon6.png';
import servicesIcon7 from '../../images/services_icon7.png';
import servicesIcon8 from '../../images/services_icon8.png';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { fetchServices } from '../../store/slices/service/thunk';
import { selectAllServices } from '../../store/slices/service/selectors';
import { fetchDoctors } from '../../store/slices/doctor/thunk';
import { selectAllDoctors } from '../../store/slices/doctor/selectors';
import { fetchOffers } from '../../store/slices/offer/thunk';
import { selectAllOffers } from '../../store/slices/offer/selectors';
import { selectAllReviews } from '../../store/slices/review/selectors';
import { fetchReviews } from '../../store/slices/review/thunk';

export const Home = () => {
    const dispatch = useDispatch();
    const services = useSelector(selectAllServices);
    const doctors = useSelector(selectAllDoctors);
    const offers = useSelector(selectAllOffers);
    const reviews = useSelector(selectAllReviews);

    const doctorsPrevRef = useRef(null);
    const doctorsNextRef = useRef(null);
    const reviewsPrevRef = useRef(null);
    const reviewsNextRef = useRef(null);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchOffers());
    }, [dispatch]);

    const twoElementsArray = [];

    for (let i = 0; i < reviews.length; i += 2) {
        twoElementsArray.push(
            <SwiperSlide key={i}>
                <Review review={reviews[i]} />
                {reviews[i + 1] && <Review review={reviews[i + 1]} />}
            </SwiperSlide>,
        );
    }

    const [openLeaveReview, setOpenLeaveReview] = useState(false);
    const [openAskQuestion, setOpenAskQuestion] = useState(false);

    const toggleOpenLeaveReview = () => {
        setOpenLeaveReview(!openLeaveReview);
    };

    const toggleOpenAskQuestion = () => {
        setOpenAskQuestion(!openAskQuestion);
    };

    return (
        <div>
            <Header />
            <div className='guarantee'>
                <div className='container'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 2,
                            },
                            700: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                        }}
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
                            {services.map((service) => (
                                <PricesRow key={service.id} data={service} />
                            ))}
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
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 2,
                            },
                            700: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {offers.map((offer) => (
                            <SwiperSlide key={offer.id}>
                                <Offer data={offer} />
                            </SwiperSlide>
                        ))}
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
                        slidesPerView={1}
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
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1.5,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2.5,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 3.5,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {doctors.map((doctor) => (
                            <SwiperSlide key={doctor.id}>
                                <Doctor data={doctor} />
                            </SwiperSlide>
                        ))}
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
                                {twoElementsArray}
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
            <Footer />
        </div>
    );
};
