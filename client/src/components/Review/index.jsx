import fillStar from '../../images/fill_star.svg';
import star from '../../images/star.svg';

import './index.scss';

export const Review = ({ isAdmin }) => {
    const style = isAdmin
        ? {
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '30px',
          }
        : null;
    return (
        <div style={style}>
            <div className='reviews__item'>
                <div className='reviews__info'>
                    <p className='reviews__user-name'>Яцьків Юрій</p>
                    <p className='reviews__date'>10.04.2023</p>
                </div>
                <p className='reviews__content'>
                    Хочу відмітити високий професіоналізм та чуйне ставлення всіх працівників
                    клініки. Щиро дякую лікареві -Петров Максим за увагу, турботу,вміння працювати з
                    пацієнтом. Бажаю вам Бажаю вам радості, любові і поваги людей, з якими вас
                    зводить доля.
                </p>
                <div className='reviews__rating'>
                    <img src={fillStar} alt='' className='reviews__star' />
                    <img src={fillStar} alt='' className='reviews__star' />
                    <img src={fillStar} alt='' className='reviews__star' />
                    <img src={fillStar} alt='' className='reviews__star' />
                    <img src={star} alt='' className='reviews__star' />
                </div>
            </div>
            {isAdmin && (
                <div className='reviews_item-controll'>
                    <button className='reviews_item-controll-remove' type='button'>
                        Видалити
                    </button>
                </div>
            )}
        </div>
    );
};
