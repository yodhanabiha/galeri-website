import { Photo } from "../..";
import { Album, AlbumCreate } from "./albumSlice";

export const getAlbumListIdentity = async (idUser: string): Promise<Album[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/album/${idUser}`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
};

export const getAlbumPhotoListIdentity = async (id: string): Promise<Photo[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/photo/${id}`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
};


export const postAlbumIdentity = async (album: AlbumCreate): Promise<Album> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/album`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
    });
    const result = await response.json();

    return result;
};