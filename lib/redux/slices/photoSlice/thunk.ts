import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { getPhotoListIdentity } from "./fetchPhoto";


export const getPhotoList = createAppAsyncThunk(
    `photo/getlist`,
    async () => {
        const response = await getPhotoListIdentity();
        return response;
    },
);