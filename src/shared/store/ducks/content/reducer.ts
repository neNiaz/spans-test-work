import { IDogs } from "@/shared/models/IDogs.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DogState {
  dogs: IDogs;
  isLoading: boolean;
  error: string;
}

const initialState: DogState = {
  dogs: {
    message: [],
    status: false,
  },
  isLoading: false,
  error: "",
};

export const DogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {
    dogFetching(state) {
      state.isLoading = true;
    },
    dogFetchingSuccess(state, action: PayloadAction<{ message: string[] }>) {
      state.isLoading = false;
      state.error = "";
      state.dogs = {
        ...state.dogs,
        message: action.payload.message.map((url) => ({ url, liked: false })),
      };
    },
    dogFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    dogDeleteImage(state, action) {
      state.dogs.message = state.dogs.message.filter(
        (image) => image.url !== action.payload,
      );
    },
    dogAddImage(state, action: PayloadAction<string>) {
      const newDog = {
        url: action.payload,
        liked: false,
      };

      state.dogs.message.push(newDog);
    },
    dogLikeImage(state, action: PayloadAction<string>) {
      const index = state.dogs.message.findIndex(
        (dog) => dog.url === action.payload,
      );

      if (index !== -1) {
        state.dogs.message[index].liked = !state.dogs.message[index].liked;
      }
    },
  },
});

export default DogSlice.reducer;
