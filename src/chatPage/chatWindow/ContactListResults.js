import { ListGroup } from "react-bootstrap";
import Contact from "../Contact";
import { lastMassageGenerator } from "../../UsersChatDB";
import { getUserPicture, getUserNickname } from "../../UsersDB";


function ContactListResult(props) {

    var contactList;

    if (props.contacts) {
        contactList = props.contacts.map((chat, key) => {
            return (
                <Contact image={getUserPicture(chat.chatWith)}
                    link={chat.chatWith}
                    username={getUserNickname(chat.chatWith)}
                    lastTime="TODO"
                    lastMsg={lastMassageGenerator(props.user,chat.chatWith)}
                    key={key}>
                </Contact>
            );
        })
    }

    return (
        <ListGroup className="contacts_list">
            {contactList}
        </ListGroup>
    );
}

export default ContactListResult;