export const Doctor = ({ data }) => (
    <>
        <img src={data.photo} alt='Лікар' className='doctors__img' />
        <h3 className='doctors__name title3'>{data.fullName}</h3>
        <p className='doctors__experience'>
            <span>Стаж:</span> {data.experience} років
        </p>
        <p className='doctors__specialization'>
            <span>Спеціалізація:</span> {data.specialization}
        </p>
    </>
);
