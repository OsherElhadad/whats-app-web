import { getUserPicture, getUserNickname } from "../UsersDB";
import { getUserChats } from "../UsersChatDB";
import Contact from "./Contact"

function ContactsList(props) {
    return(
        getUserChats(props.user).map((chat, key) => {
            const lastMassageGenerator = () => {
                if (chat.messages.length == 0) {
                    return "New contact";
                } else {
                    return chat.messages[chat.messages.length - 1].msg;
                }
            }
            return (
                <Contact image={getUserPicture(chat.chatWith)}
                    link={chat.chatWith}
                    username={getUserNickname(chat.chatWith)}
                    lastTime="TODO"
                    lastMsg={lastMassageGenerator()}
                    key={key}>
                </Contact>
            );
        })
    );
}

export default ContactsList;