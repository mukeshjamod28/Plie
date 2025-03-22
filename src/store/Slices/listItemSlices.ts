import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
interface Event {
    event_id: string;
    event_date_id:string;
    event_name: string;
    readable_from_date: string;
    readable_to_date: string;
    event_price_from: string;
    event_price_to: string;
    city: string;
    country: string;
    keywords: string[];
    event_profile_img: string;
}
interface IInitialState {
    CurrentUser: any,
    favorites: Event[],
}

const initialState: IInitialState = {
    CurrentUser: {},
    favorites: [],
};

export const apiSlice = createSlice({
    name: "apiSlice",
    initialState,
    reducers: {
        changeCurrentUserValue: (state, action: PayloadAction<any>) => {
            if (typeof action.payload === "function") {
                state.CurrentUser = (action.payload as (prev: any) => any)(state.CurrentUser)
            } else {
                state.CurrentUser = action.payload
            }
        },
        toggleFavorite: (state, action: PayloadAction<Event>) => {
            const existingIndex = state.favorites.findIndex(event => event.event_date_id === action.payload.event_date_id);
            if (existingIndex >= 0) {
                // If already exists, remove it
                state.favorites.splice(existingIndex, 1);
            } else {
                // If not exists, add it
                state.favorites.push(action.payload);
            }
        },

    },
});

// Action creators are generated for each case reducer function
export const {
    changeCurrentUserValue,
    toggleFavorite
} = apiSlice.actions;

export default apiSlice.reducer;
