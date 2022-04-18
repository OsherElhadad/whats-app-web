import Modal from "react-bootstrap/Modal";

function InvalidFileModal(props) {
    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header className="bg-dark text-white">
                <Modal.Title >Invalid file!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">{props.text}</Modal.Body>
            <Modal.Footer className="bg-dark text-white">
                <button className="btn btn-outline-light" onClick={props.hideModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export default InvalidFileModal;