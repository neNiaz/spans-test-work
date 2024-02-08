import { AppDispatch } from "@/shared/store/store.ts";
import { DOG_IMAGE } from "@/shared/constants/api.ts";
import { DogSlice } from "@/shared/store/ducks/content/reducer.ts";
import axios from "axios";
import { IDogs } from "@/shared/models/IDogs.ts";

export const fetchDogs = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(DogSlice.actions.dogFetching());
    const response = await axios.get<IDogs>(DOG_IMAGE);
    dispatch(DogSlice.actions.dogFetchingSuccess(response.data));
  } catch (e) {
    dispatch(DogSlice.actions.dogFetchingError(e));
  }
};

export const { dogDeleteImage, dogLikeImage, dogAddImage } = DogSlice.actions;
