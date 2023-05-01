/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import close from '../../images/close.svg';
import './index.scss';
import { mailerApi } from '../../api/mailerApi';

export const OrderCall = ({ handleClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [phone, setPhone] = useState(false);
    const onChange = (event) => {
        setPhone(event.target.value);
    };

    const onSubmit = (data) => {
        const payload = {
            to: 'smile@example.com',
            subject: 'Замовлення дзвінку',
            body: `Від: ${data.name}. \n Номер Телефону: ${phone} `,
        };
        mailerApi.askQuestion(payload);
        handleClose();
    };

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
                <form
                    onSubmit={handleSubmit((data) => onSubmit(data))}
                    className='order-call__form'
                >
                    <input {...register('name', { required: true })} placeholder='Введіть ім’я' />
                    {errors.name && <p className='error error__name'>Введіть ваше ім’я</p>}
                    <PhoneNumber onChange={onChange} value={phone} />
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
                    <input className='order-call__submit' type='submit' value='Відправити запит' />
                </form>
            </div>
        </div>
    );
};

const PhoneNumber = (props) => (
    <InputMask mask='+380(99)-(999)-(99)-(99)' value={props.value} onChange={props.onChange}>
        {(inputProps) => <input {...inputProps} placeholder='+380(__)-(___)-(__)-(__)' />}
    </InputMask>
);
