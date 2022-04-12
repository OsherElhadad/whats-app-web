import Modal from "react-bootstrap/Modal";

function LogInSuccess(props) {
    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header>
                <Modal.Title>Log-In Failed!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Try again please!</Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-black" onClick={props.hideModal}>Try again</button>
            </Modal.Footer>
        </Modal>
    );
}

export default LogInSuccess;