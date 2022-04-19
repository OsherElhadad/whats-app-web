import { Tab, Col, Row } from "react-bootstrap";
import "./Chat.css";
import { getUserPicture, getUserNickname } from "../Users/UsersDB";
import { getUserChats } from "../Users/UsersChatDB";
import ContactsBar from "./ContactsBar";
import ChatWindow from "./chatWindow/ChatWindow";
import ContactListResult from "./chatWindow/ContactListResults";
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

    var contacts = getUserChats( props.user);

    const [contactsList, setcontactsList] = useState(contacts);

    function doSearch(query) {
        if (contacts) {
            setcontactsList(contacts.filter((contact) => getUserNickname(contact.chatWith).toLowerCase().includes(query.toLowerCase())));
        }
    }

    var chatWindows;

    if (getUserChats( props.user)) {
        chatWindows = getUserChats( props.user).map((chat, key) => {
            return (
                <ChatWindow
                    link={chat.chatWith}
                    image={getUserPicture(chat.chatWith)}
                    nickname={getUserNickname(chat.chatWith)}
                    user={chat.chatWith}
                    myUser={ props.user}
                    refreshChat={refreshChat}
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
                        <ContactsBar myUser={ props.user} setUsername={props.setUsername} refreshChat={refreshChat} doSearch={doSearch}></ContactsBar>
                        <ContactListResult user={ props.user} contacts={contactsList}>
                        </ContactListResult>
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