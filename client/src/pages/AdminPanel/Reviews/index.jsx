import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Review } from '../../../components';
import 'swiper/css';
import './index.scss';

import reviewsIcon from '../../../images/reviews.svg';
import { selectAllReviews } from '../../../store/slices/review/selectors';
import { fetchReviews } from '../../../store/slices/review/thunk';

export const Reviews = () => {
    const dispatch = useDispatch();
    const reviewsPrevRef = useRef(null);
    const reviewsNextRef = useRef(null);
    const reviews = useSelector(selectAllReviews);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    const twoElementsArray = [];

    for (let i = 0; i < reviews.length; i += 2) {
        twoElementsArray.push(
            <SwiperSlide key={i}>
                <Review review={reviews[i]} isAdmin />
                {reviews[i + 1] && <Review review={reviews[i + 1]} isAdmin />}
            </SwiperSlide>,
        );
    }

    return (
        <div className='admin-reviews' id='reviews'>
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
                        {twoElementsArray}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
