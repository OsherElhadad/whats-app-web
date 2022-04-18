import { Tab } from "react-bootstrap"
import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";
import SenderMsgBar from "./SendMsgBar";
import ContactHeader from "./ContactHeader";
import { getChatMessages } from "../../UsersChatDB"
import {useState} from "react";

function ChatWindow(props) {

    const messages = getChatMessages(props.myUser, props.user);

    const msgList = messages?.map((m, key) => {

        if (m.sent) {
            return (
                <SenderMessage
                    msgText={m.msg}
                    msgTime={m.time}
                    type={m.type}
                    key={key}>
                </SenderMessage>
            );
        }

        return (
            <ReceiverMessage
                img={props.image}
                msgText={m.msg}
                msgTime={m.time}
                type={m.type}
                key={key}>
            </ReceiverMessage>
        );
    })

    return (
        <Tab.Pane eventKey={"#".concat(props.link)}>
            <div className="chat">
                <div className="contact_card vh-100">
                    <ContactHeader image={props.image} nickname={props.nickname} lastActive={props.lastActive}></ContactHeader>
                    <div className="card-body msg_card_body">
                        {msgList}
                    </div>
                    <SenderMsgBar
                        username={props.user}
                        myUser={props.myUser}
                        refreshChat={props.refreshChat}>
                    </SenderMsgBar>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default ChatWindow;