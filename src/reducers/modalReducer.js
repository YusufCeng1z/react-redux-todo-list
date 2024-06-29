import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   modalData : {},
   modalActive : false
};

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen: (state, action) => {
        state.modalActive = true;
        state.modalData = action.payload
    },
    modalClose:(state) => {
      state.modalData = {};
      state.modalActive = false;
    },
  },
});

export const { modalOpen, modalClose} = modal.actions;

export default modal.reducer;
