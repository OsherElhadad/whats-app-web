import { Tab } from "react-bootstrap"
import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";
import SenderMsgBar from "./SendMsgBar";
import ContactHeader from "./ContactHeader";
import { getChatMessages } from "../../Users/UsersChatDB";
import $ from "jquery";

function ChatWindow(props) {

    const msgContainerId = props.myUser.concat("-").concat(props.user).concat("-msg-container");
    const msgTabPaneId = props.myUser.concat("-").concat(props.user).concat("-msg-tab-pane");

    $(document).ready(function (event) {

        $("#".concat(msgContainerId)).unbind("mousemove mouseup").on("mousemove mouseup", function (e) {
            $("#".concat(msgContainerId)).animate({ scrollTop: $("#".concat(msgContainerId)).get(0).scrollHeight }, 'slow');
        });
    });

    const messages = getChatMessages(props.myUser, props.user);

    //get all messages of user (sender and reciever)
    var msgList = messages?.map((m, key) => {

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
            <div className="chat" id={msgTabPaneId}>
                <div className="contact_card vh-100">
                    <ContactHeader image={props.image} nickname={props.nickname} ></ContactHeader>
                    <div className="card-body msg_card_body" id={msgContainerId}>
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