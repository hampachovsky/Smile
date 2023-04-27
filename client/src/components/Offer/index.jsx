export const Offer = ({ data }) => (
    <>
        <img src={data.image} alt='Пропозиція' className='offers__img' />
        <h3 className='offers__subtitle'>{data.title}</h3>
        <p className='offers__description'>{data.description}</p>
    </>
);
