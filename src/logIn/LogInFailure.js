import Modal from "react-bootstrap/Modal";

function LogInSuccess(props) {
    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header className="bg-dark text-white">
                <Modal.Title>Log-In Failed!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">Try again please!</Modal.Body>
            <Modal.Footer className="bg-dark text-white">
                <button className="btn btn-outline-light" onClick={props.hideModal}>Try again</button>
            </Modal.Footer>
        </Modal>
    );
}

export default LogInSuccess;