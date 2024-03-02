import { ReduxState } from "@/lib/redux";

export const albumListGet = (state: ReduxState) => state.album.albumList;
export const statusAlbumListGet = (state: ReduxState) => state.album.statusAlbumList;
