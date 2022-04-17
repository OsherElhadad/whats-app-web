import Modal from "react-bootstrap/Modal";

function InvalidContactModal(props) {
    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header className="justify-content-between bg-dark text-white" >
                <Modal.Title >Invalid Contact!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">{props.text}</Modal.Body>
            <Modal.Footer className="bg-dark text-white">
                <button className="btn btn-outline-light" onClick={props.hideModal}>OK</button>
            </Modal.Footer>
        </Modal>
    );
}

export default InvalidContactModal;