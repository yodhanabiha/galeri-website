"use client"
import { Button, Spinner } from "react-bootstrap"
import styles from "./photo.module.css"
import { albumPhotoListGet, getAlbumPhotoList, statusAlbumPhotoGet, useDispatch, useSelector } from "@/lib/redux";
import { useEffect } from "react";

export const PhotoAlbum = (params: {id : string}) => {
    const dispatch = useDispatch();
    const photoList = useSelector(albumPhotoListGet);
    const statusList = useSelector(statusAlbumPhotoGet)
    const lokasiFileList = photoList.length > 0 ? photoList.map(photo => `${process.env.NEXT_PUBLIC_URL}${photo.LokasiFile}`) : [];

    useEffect(() => {
        dispatch(getAlbumPhotoList(params.id))
    }, [])


    let column = lokasiFileList.length / 5
    const photoGroups = chunkArray(lokasiFileList, column)
    return (
        <>
            <div className={styles.container}>
                {statusList === "loading" && (
                    <Spinner animation="border" />
                )}

                <div className={styles.photoGallery}>
                    {photoGroups.map((group, index) => (
                        <div key={index} className={styles.column}>
                            {group.map((photo, photoIndex) => (
                                <CardFoto key={photoIndex} photo={photo} />
                            ))}

                            {group.length < 6 && (
                                <div className={styles.placeholder}></div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </>
    )

}

function chunkArray<T>(array: T[], size: number): T[][] {
    const chunkedArr: T[][] = []
    let index = 0
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index))
        index += size
    }
    return chunkedArr
}

interface CardFotoProps {
    photo: string;
}

function CardFoto({ photo }: CardFotoProps) {
    return (
        <div className={styles.photo}>
            <div className={styles.photoOverlay}>
                <Button variant="primary" className={styles.buttonDownload}>Download Photo</Button>
            </div>
            <img src={photo} />
        </div>
    );
}