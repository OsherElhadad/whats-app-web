import ChatWindow from "./chatWindow/ChatWindow";
import { getUserPicture, getUserNickname } from "../UsersDB";
import { getUserChats } from "../UsersChatDB";

function ChatWindows(props) {
    return (
        getUserChats(props.user).map((chat, key) => {
            return (
                <ChatWindow
                    link={chat.chatWith}
                    image={getUserPicture(chat.chatWith)}
                    nickname={getUserNickname(chat.chatWith)}
                    user={chat.chatWith}
                    lastActive="TODO - LastTimeActive"
                    myUser={props.user}
                    refreshChat={props.refreshChat}
                    key={key}>
                </ChatWindow>
            );
        })
    );
}

export default ChatWindows;