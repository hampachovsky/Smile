import './index.scss';

export const PricesRow = ({ data, isAdmin, icon1, icon2 }) => (
    <tr className='prices__row'>
        <td className='prices__services'>{data.service}</td>
        <td className='prices__price'>{data.price}</td>
        <td className='prices__currency'>{data.currency}</td>
        {isAdmin && (
            <td className='prices__controlls'>
                <img
                    onClick={() => console.log('TEST')}
                    src={icon1}
                    alt='Редагувати'
                    className='prices__controlls-button'
                />
                <img
                    onClick={() => console.log('TEST')}
                    src={icon2}
                    alt='Видалити'
                    className='prices__controlls-button'
                />
            </td>
        )}
    </tr>
);
