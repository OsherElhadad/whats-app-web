import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function SignUpSuccess(props) {

    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header>
                <Modal.Title>Hi {props.nick}!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You are ready to log-in!</Modal.Body>
            <Modal.Footer>
                <Link to="/" className="text-black-50 fw-bold">Log-In</Link>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUpSuccess;