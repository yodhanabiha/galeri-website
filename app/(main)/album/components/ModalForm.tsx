import { Button, Col, Form, Modal, Row } from "react-bootstrap";

interface ModalParam{
    show : boolean,
    onHide : () => void
}

export function ModalForm(params: ModalParam) {
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
                            <Form.Control placeholder="Judul Album" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Deskripsi
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control placeholder="Deskripsi Album"/>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={params.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
