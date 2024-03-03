import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { getAlbumListIdentity, postAlbumIdentity } from "./fetchAlbum";
import { AlbumCreate, getAlbumPhotoListIdentity } from "../..";

export const getAlbumList = createAppAsyncThunk(
    `album/getlist`,
    async (idUser: string) => {
        const response = await getAlbumListIdentity(idUser);
        return response;
    },
);

export const getAlbumPhotoList = createAppAsyncThunk(
    `album/photo/getlist`,
    async (id: string) => {
        const response = await getAlbumPhotoListIdentity(id);
        return response;
    },
);

export const createAlbum = createAppAsyncThunk(
    `album/create`,
    async (album: AlbumCreate) => {
        const response = await postAlbumIdentity(album);
        return response;
    },
);