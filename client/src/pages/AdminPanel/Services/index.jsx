import { PricesRow } from '../../../components';
import servicesIcon from '../../../images/services.svg';
import pencil from '../../../images/pencil.svg';
import trash from '../../../images/trash.svg';

import './index.scss';

export const Services = () => {
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
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                        <PricesRow data={service} isAdmin icon1={pencil} icon2={trash} />
                    </tbody>
                </table>
                <div className='services__controlls'>
                    <button className='services__controlls-add' type='button'>
                        Додати
                    </button>
                </div>
            </div>
        </div>
    );
};
