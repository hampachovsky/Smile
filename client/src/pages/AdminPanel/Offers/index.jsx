/* eslint-disable import/named */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-use-before-define */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import ReactImageFileToBase64 from 'react-file-image-to-base64';

import { Offer, Edit } from '../../../components';
import offersIcon from '../../../images/offers.svg';
import offersTemplate from '../../../images/offersTemplate.jpg';
import './offers.scss';

import { selectAllOffers } from '../../../store/slices/offer/selectors';
import {
    fetchCreateOffer,
    fetchDeleteOffer,
    fetchOffers,
    fetchUpdateOffer,
} from '../../../store/slices/offer/thunk';

export const Offers = () => {
    const dispatch = useDispatch();
    const [isImage, setImage] = useState(null);
    const [isEditable, setEditable] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const offers = useSelector(selectAllOffers);

    useEffect(() => {
        dispatch(fetchOffers());
    }, [dispatch]);

    const onSubmit = (data) => {
        data.image = isImage;
        dispatch(fetchCreateOffer(data));
        setImage(null);
    };

    const onOfferRemoval = useCallback(
        (doctor) => {
            dispatch(fetchDeleteOffer(doctor.id));
        },
        [dispatch],
    );

    const onEdit = useCallback((doctor) => {
        setSelectedOffer(doctor);
        setEditable(true);
    }, []);

    const onEditSubmit = useCallback(
        (data) => {
            const payload = { ...data, id: selectedOffer?.id };
            dispatch(fetchUpdateOffer(payload));

            setEditable(false);
            setSelectedOffer(null);
            reset();
        },
        [dispatch, selectedOffer],
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful, isDirty, isValid, isSubmitting },
    } = useForm();

    useEffect(() => {
        reset({
            title: selectedOffer?.title,
            description: selectedOffer?.description,
        });
        setImage(selectedOffer?.image);
    }, [selectedOffer, reset]);

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    const handleOnCompleted = (files) => {
        setImage(files[0].base64_file);
    };

    const CustomisedButton = ({ triggerInput }) => (
        <div>
            {!isImage ? (
                <label onClick={triggerInput} className='offers__photo-lable'>
                    <img src={offersTemplate} alt='Макет' />
                    <div className='plus plus1' />
                    <div className='plus plus2' />
                </label>
            ) : (
                <img
                    src={isImage}
                    alt='пропозиція'
                    onClick={triggerInput}
                    className='offers__photo-lable'
                />
            )}
        </div>
    );

    return (
        <div className='offers'>
            <h3 className='offers__title title2'>
                <img src={offersIcon} alt='Лікарі' />
                Пропозиції
            </h3>
            <div className='offers__wrapper'>
                <div className='offers__item'>
                    <form
                        className='offers__form'
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
                            {!isEditable ? 'Додати' : 'Редагувати'}
                        </button>
                    </form>
                </div>
                {offers.map((offer) => (
                    <div className='doctors__item' key={offer.id}>
                        <Offer data={offer} />
                        <Edit data={offer} remove={onOfferRemoval} edit={onEdit} />
                    </div>
                ))}
                {/* <div className='offers__item'>
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
                </div> */}
            </div>
        </div>
    );
};
