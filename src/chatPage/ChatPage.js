import { Tab, ListGroup, Col, Row} from "react-bootstrap"
import "./Chat.css"
import Contact from "./Contact"
import { users, usersChats } from "../Users";
import ContactsBar from "./ContactsBar";
import ChatWindow from "./chatWindow/ChatWindow"


function Chat(props) {
    const contactList = usersChats.get(props.user).map((chat, key) => {
        return (
            <Contact image={users.get(chat.chatWith).picture}
                link={chat.chatWith}
                username={users.get(chat.chatWith).nickname}
                lastTime="TODO"
                lastMsg={chat.messages[chat.messages.length - 1].msg}
                key={key}>
            </Contact>
        );
    })

    const chatWindows = usersChats.get(props.user).map((chat, key) => {
        return (
            <ChatWindow 
                link={chat.chatWith}
                image={users.get(chat.chatWith).picture}
                nickname={users.get(chat.chatWith).nickname}
                user={chat.chatWith}
                lastActive="TODO - LastTimeActive"
                myUser={props.user}
                key={key}>
            </ChatWindow>
        );
    })

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