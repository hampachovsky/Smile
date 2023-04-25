import { useDispatch } from 'react-redux';
import fillStar from '../../images/fill_star.svg';
import star from '../../images/star.svg';

import './index.scss';
import { fetchDeleteReview } from '../../store/slices/review/thunk';

export const Review = ({ isAdmin, review }) => {
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(fetchDeleteReview(review.id));
    };

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
                    <p className='reviews__user-name'>{review.fullName}</p>
                    <p className='reviews__date'>
                        {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <p className='reviews__content'>{review.content}</p>
                <div className='reviews__rating'>
                    <img
                        src={review.ratio >= 1 ? fillStar : star}
                        alt=''
                        className='reviews__star'
                    />
                    <img
                        src={review.ratio >= 2 ? fillStar : star}
                        alt=''
                        className='reviews__star'
                    />
                    <img
                        src={review.ratio >= 3 ? fillStar : star}
                        alt=''
                        className='reviews__star'
                    />
                    <img
                        src={review.ratio >= 4 ? fillStar : star}
                        alt=''
                        className='reviews__star'
                    />
                    <img
                        src={review.ratio >= 5 ? fillStar : star}
                        alt=''
                        className='reviews__star'
                    />
                </div>
            </div>
            {isAdmin && (
                <div className='reviews_item-controll'>
                    <button
                        onClick={() => onDelete()}
                        className='reviews_item-controll-remove'
                        type='button'
                    >
                        Видалити
                    </button>
                </div>
            )}
        </div>
    );
};
