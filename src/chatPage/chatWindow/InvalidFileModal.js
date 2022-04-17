import Modal from "react-bootstrap/Modal";

function InvalidFileModal(props) {
    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header>
                <Modal.Title>Invalid file!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.text}</Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-dark" onClick={props.hideModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export default InvalidFileModal;