// In your store configuration file (e.g., appStore.js)
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/addUser"],
      },
    }),
});

export default store;
