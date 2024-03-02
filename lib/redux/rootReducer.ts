/* Instruments */
import { LayoutSlice, PhotoSlice, counterSlice } from "./slices";
import { AlbumSlice } from "./slices/albumSlice/albumSlice";

export const reducer = {
  counter: counterSlice.reducer,
  layout: LayoutSlice.reducer,
  photo: PhotoSlice.reducer,
  album: AlbumSlice.reducer
};
