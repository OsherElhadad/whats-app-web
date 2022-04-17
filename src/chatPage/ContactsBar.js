import { Accordion, Card, useAccordionButton } from "react-bootstrap"
import SignOffModal from "./SignOffModal";
import { useState } from "react";

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
    const [isModelOpen, setIsModelOpen] = useState(false);

    const showSignOffModal = () => {
        setIsModelOpen(true);
    };
    const hideSignOffModal = () => {
        setIsModelOpen(false);
    };

    return (
        <>
            <SignOffModal isOpen={isModelOpen} hideModal={hideSignOffModal} setUsername={props.setUsername}></SignOffModal>

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
                                        <button type="button" className="btn btn-outline-secondary add_contact_btn">
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