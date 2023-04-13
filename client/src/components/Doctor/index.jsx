import doctor from '../../images/doctor.jpg';

export const Doctor = () => (
    <>
        <img src={doctor} alt='Лікар' className='doctors__img' />
        <h3 className='doctors__name title3'>Петров Максим Максимович</h3>
        <p className='doctors__experience'>
            <span>Стаж:</span> 9 років
        </p>
        <p className='doctors__specialization'>
            <span>Спеціалізація:</span> Хірургія
        </p>
    </>
);
