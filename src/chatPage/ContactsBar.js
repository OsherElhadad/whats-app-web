import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { getUserPicture } from "../Users/UsersDB";
import { validateAddContact } from "../Users/UsersChatDB";
import ProfilePicModal from "./ProfilePicModal";
import $ from 'jquery';
import { addContact, usersChats } from "../Users/UsersChatDB";
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

function validateAddContactKeyUp(username, talkWith) {
    var errorMsg = validateAddContact(username, talkWith);
    if (errorMsg == "") {
        document.getElementById("add-contact-input").classList.add('is-valid');
        document.getElementById("add-contact-input").classList.remove('is-invalid');
        return true;
    }
    document.getElementById("addContactInvalidFeedback").innerHTML = errorMsg;
    document.getElementById("add-contact-input").classList.remove('is-valid');
    document.getElementById("add-contact-input").classList.add('is-invalid');
    return false;
}

function ContactsBar(props) {

    $(document).ready(function (event) {
        $("#add-contact-input").unbind().bind("keypress", function (e) {
            if(e.keyCode == 13) {
                document.getElementById("add_contact_btn").click();
            }
        })

        $("#add_contact_btn").unbind("click").on("click", function () {
            let error = validateAddContact(props.myUser, $("#add-contact-input").val());
            if (error == "") {
                addContact(props.myUser, $("#add-contact-input").val());
                addContact($("#add-contact-input").val(), props.myUser);
                props.refreshChat();
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

    const [isProfilePicModelOpen, setIsProfilePicModelOpen] = useState(false);

    const showProfilePicfModal = () => {
        setIsProfilePicModelOpen(true);
    };
    const hideProfilePicModal = () => {
        setIsProfilePicModelOpen(false);
    };

    const addContactRef = useRef("");

    useEffect(() => {
        document.getElementById("add-contact-input").addEventListener("keyup", function (event) { validateAddContactKeyUp(props.myUser, addContactRef.current.value); })
    }, [])

    const searchBox = useRef(null);

    const searchContact = function () {
        props.doSearch(searchBox.current.value);
    }

    return (
        <>
            <SignOffModal isOpen={isSignOffModelOpen} hideModal={hideSignOffModal} setUsername={props.setUsername}></SignOffModal>
            <ProfilePicModal isOpen={isProfilePicModelOpen} hideModal={hideProfilePicModal} myUser={props.myUser}></ProfilePicModal>
            <div className="icons_item">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <div className="d-flex justify-content-between">
                                <img id="profile_pic" src={getUserPicture(props.myUser)} onClick={showProfilePicfModal} className="rounded-circle user_img_msg" />
                                <AddContactAwareToggle eventKey="1"></AddContactAwareToggle>
                                <SearchAwareToggle eventKey="0"></SearchAwareToggle>
                                <button type="button" className="btn btn-outline-secondary" onClick={showSignOffModal}>
                                    <i className="bi bi-power"></i>
                                </button>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <input type="search" ref={searchBox} className="form-control type_msg" id="search-input" placeholder="Search contacts..." onKeyUp={searchContact} onChange={searchContact} aria-label="Search contacts..." />
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div id="add_contact_form" noValidate>
                                    <div className="input-group">
                                        <input ref={addContactRef} id="add-contact-input" type="text" placeholder="Add contacts..." aria-label="Add contacts..." className="form-control type_msg" />
                                        <div className="input-group-append">
                                            <button type="button" className="btn btn-outline-secondary" id="add_contact_btn">
                                                <i className="bi bi-plus"></i>
                                            </button>
                                        </div>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div id="addContactInvalidFeedback" className="invalid-feedback"></div>
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