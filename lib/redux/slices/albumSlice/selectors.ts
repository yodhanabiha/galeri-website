import { ReduxState } from "@/lib/redux";

export const albumListGet = (state: ReduxState) => state.album.albumList;
export const statusAlbumListGet = (state: ReduxState) => state.album.statusAlbumList;
export const albumPhotoListGet = (state: ReduxState) => state.album.albumListPhoto;
export const statusAlbumPhotoGet = (state: ReduxState) => state.album.statusAlbumPhotoList;

