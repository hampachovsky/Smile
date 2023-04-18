/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';

import { Offer, Edit } from '../../../components';
import offersIcon from '../../../images/offers.svg';
import offersTemplate from '../../../images/offersTemplate.jpg';
import './offers.scss';

export const Offers = () => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, isSubmitting },
    } = useForm();
    return (
        <div className='offers'>
            <h3 className='offers__title title2'>
                <img src={offersIcon} alt='Лікарі' />
                Пропозиції
            </h3>
            <div className='offers__wrapper'>
                <div className='offers__item'>
                    <Offer />
                    <Edit />
                </div>
                <div className='offers__item'>
                    <Offer />
                    <Edit />
                </div>
                <div className='offers__item'>
                    <Offer />
                    <Edit />
                </div>
                <div className='offers__item'>
                    <Offer />
                    <Edit />
                </div>
                <div className='offers__item'>
                    <Offer />
                    <Edit />
                </div>
                <div className='offers__item'>
                    <form className='offers__form' onSubmit={handleSubmit((data) => data)}>
                        <div>
                            <input
                                className='offers__photo'
                                {...register('image', { required: true })}
                                type='file'
                                id='offers-photo'
                            />
                            <label htmlFor='offers-photo' className='offers__photo-lable'>
                                <img src={offersTemplate} alt='Макет' />
                                <div className='plus plus1' />
                                <div className='plus plus2' />
                            </label>
                        </div>
                        <input
                            className='offers__heading'
                            {...register('title', { required: true })}
                            placeholder='Заголовок'
                        />
                        <textarea
                            className='offers__descript'
                            {...register('description', { required: true })}
                            placeholder='Опис'
                        />
                        <button
                            disabled={!isDirty || !isValid || isSubmitting}
                            className='offers__submit'
                            type='submit'
                        >
                            Додати
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
