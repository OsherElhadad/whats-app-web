import { Tab, ListGroup, Col, Row } from "react-bootstrap"
import "./Chat.css"
import Contact from "./Contact"
import { getUserPicture , getUserNickname } from "../UsersDB";
import { getUserChats } from "../UsersChatDB";
import ContactsBar from "./ContactsBar";
import ChatWindow from "./chatWindow/ChatWindow"


function Chat(props) {

    var contactList;

    if (getUserChats(props.user)) {
        contactList = getUserChats(props.user).map((chat, key) => {
            return (
                <Contact image={getUserPicture(chat.chatWith)}
                    link={chat.chatWith}
                    username={getUserNickname(chat.chatWith)}
                    lastTime="TODO"
                    lastMsg={chat.messages[chat.messages.length - 1].msg}
                    key={key}>
                </Contact>
            );
        })
    }

    var chatWindows;

    if (getUserChats(props.user)) {
        chatWindows = getUserChats(props.user).map((chat, key) => {
            return (
                <ChatWindow
                    link={chat.chatWith}
                    image={getUserPicture(chat.chatWith)}
                    nickname={getUserNickname(chat.chatWith)}
                    user={chat.chatWith}
                    lastActive="TODO - LastTimeActive"
                    myUser={props.user}
                    key={key}>
                </ChatWindow>
            );
        })
    }

    return (
        <div>
            <Tab.Container id="list-group-tabs" defaultActiveKey="#def">
                <Row>
                    <Col sm={4} className="vh-100">
                        <ContactsBar></ContactsBar>
                        <ListGroup className="contacts_list">
                            {contactList}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {chatWindows}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>

    );
}

export default Chat;