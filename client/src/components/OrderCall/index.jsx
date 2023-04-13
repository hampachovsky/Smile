/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import close from '../../images/close.svg';
import './index.scss';

export const OrderCall = ({ handleClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className='box'>
            <div className='order-call'>
                <button className='order-call__close' onClick={handleClose} type='button'>
                    <img src={close} alt='Закрити' />
                </button>
                <h2 className='order-call__title title2'>Замовити дзвінок</h2>
                <p className='order-call__description'>
                    Відповімо на будь-яке питання про лікування та запишемо до фахівця на прийом
                </p>
                <form onSubmit={handleSubmit((data) => data)} className='order-call__form'>
                    <input {...register('name', { required: true })} placeholder='Введіть ім’я' />
                    {errors.name && <p className='error error__name'>Введіть ваше ім’я</p>}
                    {errors.phone && <p className='error error__review'>Введіть номер телефону</p>}
                    <div className='order-call__agree-block'>
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
                    <input className='order-call__submit' type='submit' value='Відправити відгук' />
                </form>
                <MaskedInput
                    mask={[
                        '(',
                        / [ 1-9 ] /,
                        / \d /,
                        / \d /,
                        ')',
                        ' ',
                        / \d /,
                        / \d /,
                        / \d /,
                        '-',
                        / \d /,
                        / \d /,
                        / \d /,
                        / \d /,
                    ]}
                    className='form-control'
                    placeholder='Enter a phone number'
                    guide={false}
                    id='my-input-id'
                    onBlur={() => {}}
                    onChange={() => {}}
                />
            </div>
        </div>
    );
};
