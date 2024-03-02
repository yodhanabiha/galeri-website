"use client";
import { Button, Card, Row, Spinner } from "react-bootstrap";
import styles from "./album.module.css";
import { albumListGet, getAlbumList, statusAlbumListGet, useDispatch, useSelector } from "@/lib/redux";
import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { ModalForm } from "./ModalForm";

export const Albums = () => {
    const dispatch = useDispatch();
    const albumList = useSelector(albumListGet);
    const albumListStatus = useSelector(statusAlbumListGet)
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        dispatch(getAlbumList())
    }, [])

    return (
        <>
            <div className={styles.container}>
                {albumListStatus === "loading" && (
                    <Spinner animation="border" />
                )}
                {albumList && albumList.map((group, index) => (
                    <Card className={styles.cardAlbum}>
                        <Row>
                            <div className={styles.image1} >
                                {group.photo[0] && group.photo[0].LokasiFile ?
                                    <img src={`${process.env.NEXT_PUBLIC_URL}${group.photo[0].LokasiFile}`} alt="" /> :
                                    <></>
                                }
                            </div>
                            <div className={styles.image2}>
                                <div className={styles.image3}>
                                    {group.photo[1] && group.photo[1].LokasiFile ?
                                        <img src={`${process.env.NEXT_PUBLIC_URL}${group.photo[1].LokasiFile}`} alt="" /> :
                                        <></>
                                    }
                                </div>
                                <div className={styles.image4}>
                                    {group.photo[2] && group.photo[2].LokasiFile ?
                                        <img src={`${process.env.NEXT_PUBLIC_URL}${group.photo[2].LokasiFile}`} alt="" /> :
                                        <></>
                                    }
                                </div>
                            </div>
                        </Row>
                        <h4>{group.NamaAlbum}</h4>
                        <p>{group.Deskripsi}</p>

                    </Card>
                ))}

                

            </div>
            <ModalForm show={modalShow} onHide={() => setModalShow(false)} />
            <Button variant="outline-dark" className={styles.buttonUpload} onClick={() => setModalShow(true)}>
                <FaUpload size={35} />
            </Button>
        </>
    )
}