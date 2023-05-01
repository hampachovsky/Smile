import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import close from '../../../../images/close.svg';

import './index.scss';

const valdiationSchema = yup
    .object({
        name: yup.string().required('Введыть назву'),
        description: yup.string().min(5, 'Довжина мінімум 5').required('Введіть опис'),
        price: yup
            .number('Ціна повинна бути числом')
            .positive('Число повинно бути більше 0')
            .integer('Ціна повинна бути числом')
            .required('Введіть ціну'),
        currency: yup.string().required('Введіть валюту'),
    })
    .required();

export const ServiceForm = ({ isModalVisible, onCancel, isEditable, onSubmit, service }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: '',
            currency: '',
        },
        resolver: yupResolver(valdiationSchema),
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
    });

    useEffect(() => {
        reset({
            name: service?.name,
            description: service?.description,
            price: service?.price,
            currency: service?.currency,
        });
    }, [service, reset]);

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    return (
        isModalVisible && (
            <div className='box'>
                <div className='service-form'>
                    <button
                        onClick={() => onCancel()}
                        className='service-form__close'
                        type='button'
                    >
                        <img src={close} alt='Закрити' />
                    </button>
                    <h2 className='service-form__title title2'>
                        {isEditable ? 'Редагувати послугу' : 'Створити послугу'}
                    </h2>
                    <form
                        onSubmit={handleSubmit((data) => onSubmit(data))}
                        className='service-form__form'
                    >
                        {errors.name?.message && (
                            <p className='error error__name'>{errors.name.message}</p>
                        )}
                        <input {...register('name')} placeholder='Введіть ім’я' />

                        {errors.description?.message && (
                            <p className='error error__description'>{errors.description.message}</p>
                        )}
                        <input {...register('description')} placeholder='Введіть опис' />

                        {errors.price?.message && (
                            <p className='error error__price'>{errors.price.message}</p>
                        )}
                        <input {...register('price')} placeholder='Введіть ціну' />

                        {errors.currency?.message && (
                            <p className='error error__currency'>{errors.currency.message}</p>
                        )}
                        <input {...register('currency')} placeholder='Введіть валюту' />

                        <input
                            className='service-form__submit'
                            type='submit'
                            value={isEditable ? 'Редагувати' : 'Створити'}
                        />
                    </form>
                </div>
            </div>
        )
    );
};
