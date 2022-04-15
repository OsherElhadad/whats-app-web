import { Tab, ListGroup, Col, Row, Accordion, Card, useAccordionButton } from "react-bootstrap"
import "./Chat.css"
import Contact from "./Contact"
import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";
import UserChatInfo from "./UserChatInfo";
import { users } from "../Users";


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
            <i className="fa fa-search"></i>
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
            <i className="fa fa-users"></i>
        </button>
    );
}
function Chat(props) {
    return (
        <div>

            <UserChatInfo name={props.user}> </UserChatInfo>

        </div>

    );
}

export default Chat;