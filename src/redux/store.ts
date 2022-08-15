import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mediaReducer from "./mediaSlice";
import mediaDetailsSlice from "./mediaDetailsSlice";

export const store = configureStore({
  reducer: {
    media: mediaReducer,
    details: mediaDetailsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
