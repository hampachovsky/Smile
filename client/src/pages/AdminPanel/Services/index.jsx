import { useCallback, useState } from 'react';
import { PricesRow } from '../../../components';
import { ServiceForm } from './components/ServiceForm';

import pencil from '../../../images/pencil.svg';
import servicesIcon from '../../../images/services.svg';
import trash from '../../../images/trash.svg';

import './index.scss';

const serviceIcons = {
    icon1: pencil,
    icon2: trash,
};

export const Services = () => {
    const [isModalVisible, setModalVisibility] = useState(false);
    const [isEditable, setEditable] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const onCancel = useCallback(() => {
        setEditable(false);
        setModalVisibility(false);
    }, []);

    // TODO: ON `PriceRow` component use onEdit, where select servcie and pass them to edit form.

    const onEdit = useCallback((service) => {
        setSelectedService(service);
        setEditable(true);
        setModalVisibility(true);
    }, []);

    const onAddService = () => {
        setModalVisibility(true);
    };

    const service = {
        service: 'Консультація лікаря-стоматолога',
        price: '300',
        currency: 'UAH',
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
                        <PricesRow
                            data={service}
                            onEdit={onEdit}
                            isAdmin
                            serviceIcons={serviceIcons}
                        />
                        <PricesRow
                            data={service}
                            onEdit={onEdit}
                            isAdmin
                            serviceIcons={serviceIcons}
                        />
                        <PricesRow
                            data={service}
                            onEdit={onEdit}
                            isAdmin
                            serviceIcons={serviceIcons}
                        />
                        <PricesRow
                            data={service}
                            onEdit={onEdit}
                            isAdmin
                            serviceIcons={serviceIcons}
                        />
                        <PricesRow
                            data={service}
                            onEdit={onEdit}
                            isAdmin
                            serviceIcons={serviceIcons}
                        />
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
                    <ServiceForm
                        isEditable={isEditable}
                        isModalVisible={isModalVisible}
                        onCancel={onCancel}
                    />
                </div>
            </div>
        </div>
    );
};
