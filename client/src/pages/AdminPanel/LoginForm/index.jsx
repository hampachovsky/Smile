import React from 'react';
import { useForm } from 'react-hook-form';
import { adminApi } from '../../../api/adminApi';

import './index.scss';

export const LoginForm = ({ handleAuth }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isDirty, isValid, isSubmitting },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            await adminApi.login(data);
            await handleAuth();
        } catch ({ response }) {
            setError('root.serverError', { type: 400, message: response.data.message });
        }
    };
    return (
        <div className='admin-auth'>
            <h1 className='admin-auth__title title2'>Увійти</h1>
            <div className='admin-auth__form'>
                <form onSubmit={handleSubmit(onSubmit)} className='admin-auth__form'>
                    {errors.root?.serverError?.type === 400 && (
                        <p className='error error__name'>Неправильний логін чи пароль</p>
                    )}
                    <div>
                        {errors.username && <p className='error error__name'>Введіть ім’я</p>}
                        <input
                            className='admin-auth__field'
                            {...register('username', { required: true })}
                            placeholder='Введіть ім’я'
                        />
                    </div>
                    <div>
                        {errors.password && <p className='error error__password'>Введіть пароль</p>}
                        <input
                            className='admin-auth__field'
                            {...register('password', { required: true })}
                            placeholder='Введіть пароль'
                        />
                    </div>
                    <button
                        disabled={!isDirty || !isValid || isSubmitting}
                        className='admin-auth__submit'
                        type='submit'
                    >
                        Увійти
                    </button>
                </form>
            </div>
        </div>
    );
};
