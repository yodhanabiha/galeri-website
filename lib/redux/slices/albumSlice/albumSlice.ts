import { createSlice } from "@reduxjs/toolkit";
import { getAlbumList } from "./thunk";
import { Photo } from "../photoSlice/photoSlice";


const initialState: AlbumState = {
    albumList: [],
    statusAlbumList: "idle"
};

export const AlbumSlice = createSlice({
    name:"album",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAlbumList.pending, (state) => {
                state.statusAlbumList = "loading"
            })
            .addCase(getAlbumList.fulfilled, (state, action) => {
                state.albumList = action.payload
                state.statusAlbumList = "idle"
            })
    }
})

export interface AlbumState {
    albumList: Album[];
    statusAlbumList: "idle" | "loading" | "failed";
}

export interface Album {
    _id: string,
    __v: number,
    NamaAlbum: string,
    Deskripsi: string,
    TanggalDibuat: string,
    userId: string,
    photo: Photo[]
}