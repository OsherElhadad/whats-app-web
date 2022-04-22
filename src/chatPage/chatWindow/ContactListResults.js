import { ListGroup } from "react-bootstrap";
import Contact from "../Contact";
import { lastMassageGenerator, lastMassageGeneratorTime } from "../../Users/UsersChatDB";
import { getUserPicture, getUserNickname } from "../../Users/UsersDB";


function ContactListResult(props) {

    var contactList;

    // get all contacts of user
    if (props.contacts) {
        contactList = props.contacts.map((chat, key) => {
            return (
                <Contact image={getUserPicture(chat.chatWith)}
                    link={chat.chatWith}
                    usernick={getUserNickname(chat.chatWith)}
                    lastTime={lastMassageGeneratorTime(props.user, chat.chatWith)}
                    lastMsg={lastMassageGenerator(props.user, chat.chatWith)}
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