import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from '../model';


type InitialState = {
    articles: Article[],
    isSendingArticle: boolean
}

const initialState: InitialState = {
    articles: [],
    isSendingArticle: false
}

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        isSendingArticle: (state, action: PayloadAction<boolean>) => {
            state.isSendingArticle = action.payload;
        },
        getAllArticles: (state, action: PayloadAction<Article[]>) => {
            state.articles = action.payload;
        }
    }
})

export const {isSendingArticle, getAllArticles} = articlesSlice.actions;
export default articlesSlice.reducer;