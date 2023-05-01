/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-use-before-define */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import ReactImageFileToBase64 from 'react-file-image-to-base64';

import { Doctor, Edit } from '../../../components';
import doctorsIcon from '../../../images/doctors.svg';
import doctorsTemplate from '../../../images/doctorsTemplate.jpg';
import './doctors.scss';

import { selectAllDoctors } from '../../../store/slices/doctor/selectors';
import {
    fetchCreateDoctor,
    fetchDeleteDoctor,
    fetchDoctors,
    fetchUpdateDoctor,
} from '../../../store/slices/doctor/thunk';

export const Doctors = () => {
    const dispatch = useDispatch();
    const [isImage, setImage] = useState(null);
    const [isEditable, setEditable] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const doctors = useSelector(selectAllDoctors);

    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch]);

    const onSubmit = (data) => {
        data.photo = isImage;
        dispatch(fetchCreateDoctor(data));
    };

    const onDoctorRemoval = useCallback(
        (doctor) => {
            dispatch(fetchDeleteDoctor(doctor.id));
        },
        [dispatch],
    );

    const onEdit = useCallback((doctor) => {
        setSelectedDoctor(doctor);
        setEditable(true);
    }, []);

    const onEditSubmit = useCallback(
        (data) => {
            const payload = { ...data, id: selectedDoctor?.id };
            dispatch(fetchUpdateDoctor(payload));

            setEditable(false);
            setSelectedDoctor(null);
            reset();
        },
        [dispatch, selectedDoctor],
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful, isDirty, isValid, isSubmitting },
    } = useForm();

    useEffect(() => {
        reset({
            fullName: selectedDoctor?.fullName,
            experience: selectedDoctor?.experience,
            specialization: selectedDoctor?.specialization,
        });
        setImage(selectedDoctor?.photo);
    }, [selectedDoctor, reset]);

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    useEffect(() => {
        reset({
            fullName: selectedDoctor?.fullName,
            experience: selectedDoctor?.experience,
            specialization: selectedDoctor?.specialization,
        });
        setImage(selectedDoctor?.photo);
    }, [selectedDoctor, reset]);

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    const handleOnCompleted = (files) => {
        setImage(files[0].base64_file);
    };

    const CustomisedButton = ({ triggerInput }) => (
        <div>
            {!isImage ? (
                <label onClick={triggerInput} className='doctors__photo-lable'>
                    <img src={doctorsTemplate} alt='Макет' />
                    <div className='plus plus1' />
                    <div className='plus plus2' />
                </label>
            ) : (
                <img
                    src={isImage}
                    alt='Лікар'
                    onClick={triggerInput}
                    className='doctors__photo-lable'
                />
            )}
        </div>
    );

    return (
        <div className='doctors'>
            <h3 className='doctors__title title2'>
                <img src={doctorsIcon} alt='Лікарі' />
                Лікарі
            </h3>

            <div className='doctors__wrapper'>
                <div className='doctors__item'>
                    <form
                        className='doctors__form'
                        onSubmit={handleSubmit((data) => {
                            if (isEditable) {
                                onEditSubmit(data);
                            } else {
                                onSubmit(data);
                            }
                        })}
                    >
                        <div>
                            <ReactImageFileToBase64
                                onCompleted={handleOnCompleted}
                                CustomisedButton={CustomisedButton}
                            />
                        </div>
                        <input
                            className='doctors__name'
                            {...register('fullName', { required: true })}
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
                            {!isEditable ? 'Додати' : 'Редагувати'}
                        </button>
                    </form>
                </div>
                {doctors.map((doctor) => (
                    <div className='doctors__item' key={doctor.id}>
                        <Doctor data={doctor} />
                        <Edit data={doctor} remove={onDoctorRemoval} edit={onEdit} />
                    </div>
                ))}
            </div>
        </div>
    );
};
