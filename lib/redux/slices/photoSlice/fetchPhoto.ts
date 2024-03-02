import { Photo } from "./photoSlice"

export const getPhotoListIdentity = async (): Promise<Photo[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/photo`, {
    method: "GET",
  });
  const result = await response.json();
  
  return result;
};
