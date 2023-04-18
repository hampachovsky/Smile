import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Review } from '../../../components';
import './index.scss';

import reviewsIcon from '../../../images/reviews.svg';

export const Reviews = () => {
    const reviewsPrevRef = useRef(null);
    const reviewsNextRef = useRef(null);

    return (
        <div className='admin-review' id='reviews'>
            <div className='container'>
                <h2 className='reviews__title title2 admin-review__title'>
                    <img src={reviewsIcon} alt='Відгуки' className='menu__icon title_icon' />
                    Відгуки
                </h2>
                <div className='reviews__wrapper'>
                    <div className='admin-reviews__swiper'>
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
                                <Review isAdmin />
                                <Review isAdmin />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Review isAdmin />
                                <Review isAdmin />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};
