import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import equipmentReducer from '../reducers/equipmentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    equipment: equipmentReducer,
  },
});
