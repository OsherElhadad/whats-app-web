import { Accordion, Card, useAccordionButton } from "react-bootstrap"
import { useState } from "react";
import $ from "jquery";
import { addContact } from "../UsersChatDB";
import InvalidFileModal from "./chatWindow/InvalidFileModal";
import SignOffModal from "./SignOffModal";

function SearchAwareToggle({ children, eventKey, callback }) {

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={decoratedOnClick}>
            <i className="bi bi-search"></i>
        </button>
    );
}

function AddContactAwareToggle({ children, eventKey, callback }) {

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={decoratedOnClick}>
            <i className="bi bi-person-plus-fill"></i>
        </button>
    );
}

function ContactsBar(props) {

    $(document).ready(function (event) {
        $("#add_contact_btn").unbind("click").on("click", function () {
            let error = addContact(props.username, $("#add-contact-input").val());
            if (error != "") {
                setModalText(error);
                showModal();
                console.log(error);
            } else {
                props.refreshChat();
            }
        })
    })

    const [isSignOffModelOpen, setIsSignOffModelOpen] = useState(false);

    const showSignOffModal = () => {
        setIsSignOffModelOpen(true);
    };
    const hideSignOffModal = () => {
        setIsSignOffModelOpen(false);
    }

    const [isModelOpen, setIsModelOpen] = useState(false);

    const [modalText, setModalText] = useState("");

    const showModal = () => {
        setIsModelOpen(true);
    };
    const hideModal = () => {
        setIsModelOpen(false);
    };

    return (
        <>
            <InvalidFileModal isOpen={isModelOpen} hideModal={hideModal} text={modalText}></InvalidFileModal>
            <SignOffModal isOpen={isSignOffModelOpen} hideModal={hideSignOffModal} setUsername={props.setUsername}></SignOffModal>

            <div className="icons_item">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <div className="d-flex justify-content-between">
                                <SearchAwareToggle eventKey="0"></SearchAwareToggle>
                                <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img_msg" />
                                <button type="button" className="btn btn-outline-secondary" onClick={showSignOffModal}>
                                    <i className="bi bi-power"></i>
                                </button>
                                <AddContactAwareToggle eventKey="1"></AddContactAwareToggle>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <input type="search" className="form-control type_msg" id="search-input" placeholder="Search contacts..." aria-label="Search contacts..." />
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div className="input-group">

                                    <input type="text" className="form-control type_msg" id="add-contact-input" placeholder="Add contacts..." aria-label="Add contacts..." />

                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-outline-secondary" id="add_contact_btn">
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>
    );
}

export default ContactsBar;