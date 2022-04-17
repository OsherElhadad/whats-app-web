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
            <Modal.Header>
                <Modal.Title>Are you sure yow want to say goodbye? :(</Modal.Title>
            </Modal.Header>
            <Modal.Body> click on the button to sign off! </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-dark" onClick={signOff}>Sign-Off</button>

                <button className="btn btn-outline-dark" onClick={props.hideModal}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignOffModal;