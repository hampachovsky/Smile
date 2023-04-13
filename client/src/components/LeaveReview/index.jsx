/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';

import close from '../../images/close.svg';
import './index.scss';

export const LeaveReview = ({ handleClose }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
        console.log(rate);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className='box'>
            <div className='leave-review'>
                <button className='leave-review__close' onClick={handleClose} type='button'>
                    <img src={close} alt='Закрити' />
                </button>
                <h2 className='leave-review__title title2'>Залишити відгук</h2>
                <p className='leave-review__description'>Будемо раді будь-якому відгуку</p>
                <form onSubmit={handleSubmit((data) => data)} className='leave-review__form'>
                    <input {...register('name', { required: true })} placeholder='Введіть ім’я' />
                    {errors.name && <p className='error error__name'>Введіть ваше ім’я</p>}
                    <textarea {...register('review', { required: true })} placeholder='Відгук...' />
                    {errors.review && <p className='error error__review'>Введіть ваш відгук</p>}
                    <Rating onClick={handleRating} initialValue={rating} />
                    <div className='leave-review__agree-block'>
                        <input
                            type='checkbox'
                            value='agree'
                            {...register('agree', { required: true })}
                            id='agree'
                        />
                        <label htmlFor='agree'>
                            Я згоден на обробку персональних даних у відповідності до Політики
                            Конфендиційності
                        </label>
                        {errors.agree && <p className='error error__agree'>Ви не погодились</p>}
                    </div>
                    <input
                        className='leave-review__submit'
                        type='submit'
                        value='Відправити відгук'
                    />
                </form>
            </div>
        </div>
    );
};
