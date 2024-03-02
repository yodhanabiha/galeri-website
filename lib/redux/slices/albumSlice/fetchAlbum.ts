import { Album } from "./albumSlice";

export const getAlbumListIdentity = async (): Promise<Album[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/album`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
};