import { serviceAdapter } from './serviceSlice';

export const {
    selectAll: selectAllServices,
    selectById: selectServiceById,
    selectIds: selectServicesIds,
} = serviceAdapter.getSelectors((state) => state.serviceReducer);
