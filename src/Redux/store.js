import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slice/pageSlice';
import articlesReducer from './slice/articlesSlice';
export const store = configureStore({
    reducer:{
        page:pageReducer,
        articles:articlesReducer
    }
 
});
export default store;