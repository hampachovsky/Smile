import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PricesRow } from '../../../components';
import { ServiceForm } from './components/ServiceForm';

import pencil from '../../../images/pencil.svg';
import servicesIcon from '../../../images/services.svg';
import trash from '../../../images/trash.svg';

import { selectAllServices } from '../../../store/slices/service/selectors';
import './index.scss';
import {
    fetchCreateService,
    fetchDeleteService,
    fetchServices,
    fetchUpdateService,
} from '../../../store/slices/service/thunk';

const serviceIcons = {
    icon1: pencil,
    icon2: trash,
};

export const Services = () => {
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisibility] = useState(false);
    const [isEditable, setEditable] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const services = useSelector(selectAllServices);

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    const onCancel = useCallback(() => {
        setEditable(false);
        setModalVisibility(false);
    }, []);

    const onEdit = useCallback((service) => {
        setSelectedService(service);
        setEditable(true);
        setModalVisibility(true);
    }, []);

    const onEditSubmit = useCallback(
        (data) => {
            const payload = { ...data, id: selectedService?.id };
            dispatch(fetchUpdateService(payload));

            setEditable(false);
            setModalVisibility(false);
        },
        [dispatch, selectedService],
    );

    const onSubmit = useCallback(
        (data) => {
            dispatch(fetchCreateService(data));
            setModalVisibility(false);
        },
        [dispatch],
    );

    const onServiceRemoval = useCallback(
        (service) => {
            dispatch(fetchDeleteService(service.id));
        },
        [dispatch],
    );

    const onAddService = () => {
        setModalVisibility(true);
    };

    return (
        <div className='prices' id='prices'>
            <div className='container'>
                <h2 className='prices__title title2'>
                    <img src={servicesIcon} alt='Послуги' className='menu__icon title_icon' />
                    Послуги
                </h2>
                <table className='prices__table'>
                    <thead>
                        <tr className='prices__caption'>
                            <th>Прайс стоматологічних послуг</th>
                            <th>Вартість</th>
                            <th>Валюта</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <PricesRow
                                key={service.id}
                                data={service}
                                onEdit={onEdit}
                                onDelete={onServiceRemoval}
                                isAdmin
                                serviceIcons={serviceIcons}
                            />
                        ))}
                    </tbody>
                </table>
                <div className='services__controlls'>
                    <button
                        onClick={() => onAddService()}
                        className='services__controlls-add'
                        type='button'
                    >
                        Додати
                    </button>
                    {isEditable && selectedService ? (
                        <ServiceForm
                            isEditable={isEditable}
                            isModalVisible={isModalVisible}
                            onSubmit={onEditSubmit}
                            onCancel={onCancel}
                            service={selectedService}
                        />
                    ) : (
                        <ServiceForm
                            isEditable={isEditable}
                            isModalVisible={isModalVisible}
                            onSubmit={onSubmit}
                            onCancel={onCancel}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
