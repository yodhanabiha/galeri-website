import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { getAlbumListIdentity } from "./fetchAlbum";

export const getAlbumList = createAppAsyncThunk(
    `album/getlist`,
    async () => {
        const response = await getAlbumListIdentity();
        return response;
    },
);