import { Accordion, Card, useAccordionButton } from "react-bootstrap"
import SignOffModal from "./SignOffModal";
import { useState } from "react";
import { getUserPicture } from "../UsersDB";
import ProfilePicModal from "./ProfilePicModal";

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
    const [isSignOffModelOpen, setIsSignOffModelOpenModelOpen] = useState(false);

    const showSignOffModal = () => {
        setIsSignOffModelOpenModelOpen(true);
    };
    const hideSignOffModal = () => {
        setIsSignOffModelOpenModelOpen(false);
    };

    const [isProfilePicModelOpen, setIsProfilePicModelOpen] = useState(false);

    const showProfilePicfModal = () => {
        setIsProfilePicModelOpen(true);
    };
    const hideProfilePicModal = () => {
        setIsProfilePicModelOpen(false);
    };

    console.log("contacsbar: "+props.myUser);

    return (
        <>
            <SignOffModal isOpen={isSignOffModelOpen} hideModal={hideSignOffModal} setUsername={props.setUsername}></SignOffModal>
            <ProfilePicModal isOpen={isProfilePicModelOpen} hideModal={hideProfilePicModal} myUser={props.myUser}></ProfilePicModal>
            <div className="icons_item">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <div className="d-flex justify-content-between">
                                <SearchAwareToggle eventKey="0"></SearchAwareToggle>
                                <img src={getUserPicture(props.myUser)} onClick={setIsProfilePicModelOpen} className="rounded-circle user_img_msg" />
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