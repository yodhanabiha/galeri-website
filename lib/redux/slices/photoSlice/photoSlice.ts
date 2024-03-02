import { createSlice } from "@reduxjs/toolkit";
import { getPhotoList } from "./thunk";


const initialState: PhotoState = {
    photoList: [],
    statusphotoList: "idle"
};

export const PhotoSlice = createSlice({
    name: "photo",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotoList.pending, (state) => {
                state.statusphotoList = "loading"
            })
            .addCase(getPhotoList.fulfilled, (state, action) => {
                state.photoList = action.payload
                state.statusphotoList = "idle"
            })
    }
})

export interface PhotoState {
    photoList: Photo[];
    statusphotoList: "idle" | "loading" | "failed";
}

export interface Photo {
    _id: string,
    __v: number,
    JudulFoto: string,
    DeskripsiFoto: string,
    LokasiFile: string,
    TanggalUnggah: string,
    albumId: string,
    userId: string
}
