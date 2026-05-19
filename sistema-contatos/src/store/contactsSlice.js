import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [] // Aqui ficarão os contatos { id, nome, email, telefone }
  },
  reducers: {
    adicionar: (state, action) => {
      state.items.push(action.payload);
    },
    remover: (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
    editar: (state, action) => {
      const index = state.items.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }
  }
});

export const { adicionar, remover, editar } = contactsSlice.actions;
export default contactsSlice.reducer;