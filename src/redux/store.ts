import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import articlesReducer from "./articlesSlice";

export const store =  configureStore({
    reducer: {
        user: userReducer,
        articles: articlesReducer,
    },
    //Getting an error "A non-serializable value was detected in the state" when using redux toolkit - but NOT with normal redux
    //With the getDefaultMiddleware getting depreciated, this can be resolved by use following code
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})



type RootState = ReturnType<typeof store.getState>
export const UserSelect = (state: RootState) => state.user;
export const ArticlesSelect = (state: RootState) => state.articles;