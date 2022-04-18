import { Tab, ListGroup, Col, Row } from "react-bootstrap"
import "./Chat.css"
import Contact from "./Contact"
import { getUserPicture, getUserNickname } from "../UsersDB";
import { getUserChats, lastMassageGenerator, lastMassageGeneratorTime } from "../UsersChatDB";
import ContactsBar from "./ContactsBar";
import ChatWindow from "./chatWindow/ChatWindow"
import { useState } from "react";

function Chat(props) {

    const [refresh, setRefresh] = useState(0);

    const refreshChat = () => {
        if (refresh == 0) {
            setRefresh(1);
        }
        else {
            setRefresh(0);
        }
    }

    var contactList;

    if (getUserChats(props.user)) {
        contactList = getUserChats(props.user).map((chat, key) => {
            
            return (
                <Contact image={getUserPicture(chat.chatWith)}
                    link={chat.chatWith}
                    username={getUserNickname(chat.chatWith)}
                    lastTime={lastMassageGeneratorTime(props.user,chat.chatWith)}
                    lastMsg={lastMassageGenerator(props.user,chat.chatWith)}
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
                    myUser={props.user}
                    refreshChat = {refreshChat}
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
                        <ContactsBar myUser={props.user} setUsername={props.setUsername} refreshChat={refreshChat}></ContactsBar>
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