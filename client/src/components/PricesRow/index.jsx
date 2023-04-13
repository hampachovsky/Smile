export const PricesRow = ({ data }) => (
    <tr className='prices__row'>
        <td className='prices__services'>{data.service}</td>
        <td className='prices__price'>{data.price}</td>
        <td className='prices__currency'>{data.currency}</td>
    </tr>
);
