import { doctorAdapter } from './doctorSlice';

export const {
    selectAll: selectAllDoctors,
    selectById: selectDocotrsById,
    selectIds: selectDoctorsIds,
} = doctorAdapter.getSelectors((state) => state.doctorReducer);
