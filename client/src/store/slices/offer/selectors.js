import { offerAdapter } from './offerSlice';

export const {
    selectAll: selectAllOffers,
    selectById: selectOffersById,
    selectIds: selectOffersIds,
} = offerAdapter.getSelectors((state) => state.offerReducer);
