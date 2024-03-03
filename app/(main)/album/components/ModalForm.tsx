"use client";
import { createAlbum, useDispatch } from "@/lib/redux";
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

interface ModalParam {
    show: boolean,
    onHide: () => void
}

export function ModalForm(params: ModalParam) {
    const dispatch = useDispatch();
    const [judul, setJudul] = useState<string>("")
    const [des, setDes] = useState<string>("")

    const handleCreate = () => {
        dispatch(createAlbum({ Deskripsi: des, NamaAlbum: judul, userId: "65e20ccae65b1bc67a035ae4" }))
            .then((res) => {
                if (res.meta.requestStatus === "fulfilled") {
                    window.location.reload();
                }
            })
    }

    return (
        <Modal
            {...params}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Album
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Judul
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={judul} onChange={(e) => { setJudul(e.target.value) }} placeholder="Judul Album" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Deskripsi
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={des} onChange={(e) => { setDes(e.target.value) }} placeholder="Deskripsi Album" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleCreate()}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
