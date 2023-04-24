import './index.scss';

export const PricesRow = ({ data, isAdmin, serviceIcons, onEdit }) => (
    <tr className='prices__row'>
        <td className='prices__services'>{data.name}</td>
        <td className='prices__price'>{data.price}</td>
        <td className='prices__currency'>{data.currency}</td>
        {isAdmin && (
            <td className='prices__controlls'>
                <img
                    onClick={() => onEdit(data)}
                    src={serviceIcons.icon1}
                    alt='Редагувати'
                    className='prices__controlls-button'
                />
                <img
                    onClick={() => console.log('TEST')}
                    src={serviceIcons.icon2}
                    alt='Видалити'
                    className='prices__controlls-button'
                />
            </td>
        )}
    </tr>
);
