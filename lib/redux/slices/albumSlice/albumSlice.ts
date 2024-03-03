import { createSlice } from "@reduxjs/toolkit";
import { getAlbumList, getAlbumPhotoList } from "./thunk";
import { Photo } from "../photoSlice/photoSlice";


const initialState: AlbumState = {
    albumList: [],
    statusAlbumList: "idle",
    albumListPhoto: [],
    statusAlbumPhotoList: "idle"
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
            .addCase(getAlbumPhotoList.pending, (state)=> {
                state.statusAlbumPhotoList = "loading"
            })
            .addCase(getAlbumPhotoList.fulfilled, (state, action)=>{
                state.albumListPhoto = action.payload
                state.statusAlbumPhotoList = "idle"
            })
    }
})

export interface AlbumState {
    albumList: Album[];
    statusAlbumList: "idle" | "loading" | "failed";
    albumListPhoto: Photo[];
    statusAlbumPhotoList: "idle" | "loading" | "failed";
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

export interface AlbumCreate {
    NamaAlbum: string,
    Deskripsi: string,
    userId: string,
}