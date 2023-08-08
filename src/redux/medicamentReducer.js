import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    medicament: {
        "CODE_PCT":"",
        "NOM_COMMERCIAL": "ezez",
        "PRIX_PUBLIC": "",
        "TARIF_REFERENCE": 0.0,
        "CATEGORIE": "",
        "DCI": "",
        "AP": "",
        "Remboursable":""
      }
}

export const medicamentSlice = createSlice({
    name: 'medicament',
    initialState,
    reducers: {
      
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;