import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchNews = createAsyncThunk("fetchNews", async (props) => {
   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page+1}&pageSize=${props.pageSize}`);
   return res?.json();
});
const initialState = {
    articles: [],
    loading: false,
    totalResults: 0
};
const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload;
        },
        addArticles: (state, action) => {
            state.articles = state.articles.concat(action.payload);
        },
        clearArticles: (state) => {
            state.articles = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading=true; // Set loading state to true
                // Handle loading state if needed
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.articles = action.payload.articles;
                console.log(action.payload,'payloadaction')
                state.loading=false
                state.totalResults = action.payload.totalResults; // Update total results
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading=false
            
            });
    }

});


export const { setArticles, addArticles, clearArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
