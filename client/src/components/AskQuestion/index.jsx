/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import close from '../../images/close.svg';
import './index.scss';

export const AskQuestion = ({ handleClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [phone, setPhone] = useState(false);
    console.log(phone);
    const onChange = (event) => {
        setPhone(event.target.value);
    };

    return (
        <div className='box'>
            <div className='ask-question'>
                <button className='ask-question__close' onClick={handleClose} type='button'>
                    <img src={close} alt='Закрити' />
                </button>
                <h2 className='ask-question__title title2'>Поставити нам запитання</h2>
                <p className='ask-question__description'>
                    Відповімо на будь-яке питання про сервіс та лікування у нашій стоматології.
                </p>
                <form onSubmit={handleSubmit((data) => data)} className='ask-question__form'>
                    <input {...register('name', { required: true })} placeholder='Введіть ім’я' />
                    {errors.name && <p className='error error__name'>Введіть ваше ім’я</p>}
                    <PhoneNumber onChange={onChange} value={phone} />
                    <textarea
                        {...register('question', { required: true })}
                        placeholder='Коротко опишіть суть питання'
                    />
                    {errors.question && (
                        <p className='error error__question'>Введіть суть запитання</p>
                    )}
                    <div className='ask-question__agree-block'>
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
                    <input className='ask-question__submit' type='submit' value='Записатися' />
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
