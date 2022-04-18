import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { useRef, useState } from "react";
import { getUserPicture } from "../Users/UsersDB";
import ProfilePicModal from "./ProfilePicModal";
import $ from "jquery";
import { addContact , usersChats} from "../Users/UsersChatDB";
import InvalidContactModal from "../InvalidContactModal";
import SignOffModal from "./SignOffModal";
import "./ContactsBar.css";

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
            let error = addContact(props.myUser, $("#add-contact-input").val());
            if (error != "") {
                setContactModalText(error);
                showContactModal();
            } else {
                addContact($("#add-contact-input").val(), props.myUser);
                props.refreshChat();
            }
        });

        $("#add-contact-input").unbind().bind("keypress", function (e) {
            if (e.keyCode == 13) {
                document.getElementById("add_contact_btn").click();
            }
        });
    })

    const [isSignOffModelOpen, setIsSignOffModelOpen] = useState(false);

    const showSignOffModal = () => {
        setIsSignOffModelOpen(true);
    };
    const hideSignOffModal = () => {
        setIsSignOffModelOpen(false);
    }

    const [isContactModelOpen, setIsContactModelOpen] = useState(false);

    const [ContactModalText, setContactModalText] = useState("");

    const showContactModal = () => {
        setIsContactModelOpen(true);
    };
    const hideContactModal = () => {
        setIsContactModelOpen(false);
    };

    const [isProfilePicModelOpen, setIsProfilePicModelOpen] = useState(false);

    const showProfilePicfModal = () => {
        setIsProfilePicModelOpen(true);
    };
    const hideProfilePicModal = () => {
        setIsProfilePicModelOpen(false);
    };

    const searchBox = useRef(null);

    const searchContact = function () {
        props.doSearch(searchBox.current.value);
    }

    return (
        <>
            <InvalidContactModal isOpen={isContactModelOpen} hideModal={hideContactModal} text={ContactModalText}></InvalidContactModal>
            <SignOffModal isOpen={isSignOffModelOpen} hideModal={hideSignOffModal} setUsername={props.setUsername}></SignOffModal>
            <ProfilePicModal isOpen={isProfilePicModelOpen} hideModal={hideProfilePicModal} myUser={props.myUser}></ProfilePicModal>
            <div className="icons_item">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <div className="d-flex justify-content-between">
                                <SearchAwareToggle eventKey="0"></SearchAwareToggle>
                                <img id="profile_pic" src={getUserPicture(props.myUser)} onClick={showProfilePicfModal} className="rounded-circle user_img_msg" />
                                <button type="button" className="btn btn-outline-secondary" onClick={showSignOffModal}>
                                    <i className="bi bi-power"></i>
                                </button>
                                <AddContactAwareToggle eventKey="1"></AddContactAwareToggle>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <input type="search" ref={searchBox} className="form-control type_msg" id="search-input" placeholder="Search contacts..." onKeyUp={searchContact} onChange={searchContact} aria-label="Search contacts..." />
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