/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';

import { Doctor, Edit } from '../../../components';
import doctorsIcon from '../../../images/doctors.svg';
import doctorsTemplate from '../../../images/doctorsTemplate.jpg';
import './doctors.scss';

export const Doctors = () => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, isSubmitting },
    } = useForm();
    return (
        <div className='doctors'>
            <h3 className='doctors__title title2'>
                <img src={doctorsIcon} alt='Лікарі' />
                Лікарі
            </h3>

            <div className='doctors__wrapper'>
                <div className='doctors__item'>
                    <Doctor />
                    <Edit />
                </div>
                <div className='doctors__item'>
                    <Doctor />
                    <Edit />
                </div>
                <div className='doctors__item'>
                    <Doctor />
                    <Edit />
                </div>
                <div className='doctors__item'>
                    <Doctor />
                    <Edit />
                </div>
                <div className='doctors__item'>
                    <Doctor />
                    <Edit />
                </div>
                <div className='doctors__item'>
                    <form className='doctors__form' onSubmit={handleSubmit((data) => data)}>
                        <div>
                            <input
                                className='doctors__photo'
                                {...register('image', { required: true })}
                                type='file'
                                id='doctors-photo'
                            />
                            <label htmlFor='doctors-photo' className='doctors__photo-lable'>
                                <img src={doctorsTemplate} alt='Макет' />
                                <div className='plus plus1' />
                                <div className='plus plus2' />
                            </label>
                        </div>
                        <input
                            className='doctors__name'
                            {...register('name', { required: true })}
                            placeholder='ПІБ'
                        />
                        <input
                            className='doctors__experience'
                            {...register('experience', { required: true })}
                            placeholder='Стаж'
                        />
                        <input
                            className='doctors__specialization'
                            {...register('specialization', { required: true })}
                            placeholder='Спеціалізація'
                        />

                        <button
                            disabled={!isDirty || !isValid || isSubmitting}
                            className='doctors__submit'
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
