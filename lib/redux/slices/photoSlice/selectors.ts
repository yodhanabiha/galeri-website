import { ReduxState } from "@/lib/redux";

export const photoListGet = (state: ReduxState) => state.photo.photoList;
export const statusPhotoList = (state: ReduxState) => state.photo.statusphotoList;