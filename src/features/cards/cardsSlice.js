import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cards: {}
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id,
                front,
                back,
                cardId: []
            };
        }
    }
});

export const { addCard } = cardsSlice.actions;

export const selectCards = (state, cardId) => state.cards.cards[cardId];

export default cardsSlice.reducer;