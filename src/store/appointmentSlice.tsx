import { Appointment, User } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Appointment[] = Array.from({ length: 8 }, (_, i) => ({
  time: `${9 + i}:00 - ${10 + i}:00`,
  booked: false,
  user: null,
}));

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    bookAppointment: (
      state,
      action: PayloadAction<{ index: number; user: User }>
    ) => {
      state[action.payload.index] = {
        ...state[action.payload.index],
        booked: true,
        user: action.payload.user,
      };
    },
    cancelAppointment: (state, action: PayloadAction<number>) => {
      state[action.payload] = {
        ...state[action.payload],
        booked: false,
        user: null,
      };
    },
  },
});

export const { bookAppointment, cancelAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
