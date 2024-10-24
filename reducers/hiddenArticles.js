import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],//<-- ênchaine plusiers properties ( apres le vergul); nomme comme tu veux
 showAll:false,
};

export const hiddenArticleSlice = createSlice({//<-- friendsSlice nomme comme tu veux>
 name: 'hiddenArticles',//<-- friends nomme comme tu veux>

  initialState,
 reducers: {// <--- dans ce accolades on puex declare pluseirs de methods
    addHide: (state, action) => {
        state.value.push(action.payload);
    },
    removeHide: (state, action) => {
        state.value = state.value.filter(article => article.title !== action.payload.title);
    },
    removeAllHide: (state) => {
        state.value = [];
    },
    showAll: (state) => {
        console.log(`-actualizé showAll()`)
        state.showAll = !state.showAll
    }
 },
});

export const { addHide, removeHide, removeAllHide, showAll } = hiddenArticleSlice.actions;//<-- ajouter plus des methods
export default hiddenArticleSlice.reducer;