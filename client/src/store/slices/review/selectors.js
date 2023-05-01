import { reviewAdapter } from './reviewSlice';

export const {
    selectAll: selectAllReviews,
    selectById: selectReviewById,
    selectIds: selectReviewsIds,
} = reviewAdapter.getSelectors((state) => state.reviewReducer);
