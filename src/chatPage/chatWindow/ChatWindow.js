import { Tab } from "react-bootstrap"
import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";
import SenderMsgBar from "./SendMsgBar";
import ContactHeader from "./ContactHeader";
import { usersChats } from "../../Users"

function ChatWindow(props) {

    const conversationMsgs = usersChats.get(props.myUser).find(i => i.chatWith == props.user).messages;

    const msgList = conversationMsgs.map((m, key) => {

        if (m.sent) {
            return (
                <SenderMessage
                    msgText={m.msg}
                    msgTime={m.time}>
                    key={key}
                </SenderMessage>
            );
        }

        return (
            <ReceiverMessage
                img={props.image}
                msgText={m.msg}
                msgTime={m.time}>
                key={key}
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
                    <SenderMsgBar></SenderMsgBar>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default ChatWindow;