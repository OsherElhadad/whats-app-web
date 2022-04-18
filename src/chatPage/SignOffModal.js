import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function SignOffModal(props) {

    let navigate = useNavigate();

    const signOff = () => {
        props.setUsername("");
        navigate("/", { replace: true });
    }

    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header className="bg-dark text-white">
                <Modal.Title>Are you sure yow want to say goodbye? :(</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white"> I wont ask again! </Modal.Body>
            <Modal.Footer className="bg-dark text-white">
                <button className="btn btn-outline-light" onClick={signOff}>Sign-Out</button>
                <button className="btn btn-outline-light" onClick={props.hideModal}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignOffModal;