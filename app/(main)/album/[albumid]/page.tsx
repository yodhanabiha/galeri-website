import { PhotoAlbum } from "./components/PhotoAlbum";

export default function AlbumPhotoPage({ params }: { params: { albumid: string } }) {
    return <PhotoAlbum id={params.albumid}  />
}
