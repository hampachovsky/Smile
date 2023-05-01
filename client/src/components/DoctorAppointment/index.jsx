/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import close from '../../images/close.svg';
import './index.scss';
import { mailerApi } from '../../api/mailerApi';

export const DoctorAppointment = ({ handleClose }) => {
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
            subject: 'Запис на прийом до лікаря',
            body: `Від: ${data.name}. \n Номер Телефону: ${phone} \n ${
                data.time !== '' ? `Бажаний час прийому: ${data.time}` : ''
            }`,
        };
        mailerApi.askQuestion(payload);
        handleClose();
    };

    return (
        <div className='box'>
            <div className='doctor-appointment'>
                <button className='doctor-appointment__close' onClick={handleClose} type='button'>
                    <img src={close} alt='Закрити' />
                </button>
                <h2 className='doctor-appointment__title title2'>Записатись на прийом</h2>
                <p className='doctor-appointment__description'>
                    Підберемо відповідний час і підкажемо точну вартість лікування
                </p>
                <form
                    onSubmit={handleSubmit((data) => onSubmit(data))}
                    className='doctor-appointment__form'
                >
                    <input {...register('name', { required: true })} placeholder='Введіть ім’я' />
                    {errors.name && <p className='error error__name'>Введіть ваше ім’я</p>}
                    <PhoneNumber onChange={onChange} value={phone} />
                    <input
                        {...register('time')}
                        placeholder='Бажаний час прийому (необов’язково)'
                    />
                    <div className='doctor-appointment__agree-block'>
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
                        className='doctor-appointment__submit'
                        type='submit'
                        value='Записатися'
                    />
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
