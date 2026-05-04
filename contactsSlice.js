import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
    items: []
    },
    reducers: {
    adicionarContato: (state, action) => {
        state.items.push(action.payload);
    },
    removerContato: (state, action) => {
        state.items = state.items.filter(c => c.id !== action.payload);
    },
    editarContato: (state, action) => {
        const index = state.items.findIndex(c => c.id === action.payload.id);
        if (index !== -1) {
        state.items[index] = action.payload;
        }
    }
    }
});

export const { adicionarContato, removerContato, editarContato } = contactsSlice.actions;
export default contactsSlice.reducer;