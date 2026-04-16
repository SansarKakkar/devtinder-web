import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,   // or [] depending on your use case
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        removeFeed: (state, action) => {
            return null;
        },
    },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;