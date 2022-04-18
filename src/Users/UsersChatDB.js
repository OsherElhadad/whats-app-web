import { doesUserExist } from "./UsersDB";
import pic1 from "./ChatMedia/Netflix.jpg";
import vid1 from "./ChatMedia/vid1.mp4";
import pic2 from "./ChatMedia/Forest.jpg";
import vid2 from "./ChatMedia/vid3.mp4";
import pic3 from "./ChatMedia/Nighthawk.jpg";
import vid3 from "./ChatMedia/vid4.mp4";
import pic4 from "./ChatMedia/Haikus.jpg";
import vid4 from "./ChatMedia/storm.mp4";
import pic5 from "./ChatMedia/Pale Wood.jpg";
import vid5 from "./ChatMedia/vid5.mp4";
import pic6 from "./ChatMedia/Back To Earth.jpg";
import vid6 from "./ChatMedia/vid6.mp4";
import pic7 from "./ChatMedia/Poncho.jpg";
import vid7 from "./ChatMedia/vid7.mp4";

export const usersChats = new Map();

usersChats.set("rag", []);
usersChats.set("lag", []);
usersChats.set("bjo", []);
usersChats.set("flo", []);
usersChats.set("rol", []);
usersChats.set("ecb", []);


// Hard-Coded Chats
addContact("rag","lag");
addContact("lag","rag");
addTextMessage("rag","lag","Hello wife!", "14:00");
addTextMessage("lag", "rag","Hello husband!", "14:01");
addTextMessage("rag","lag","Here are some media file:", "14:02");
addPictureMessage("rag","lag",pic1, "14:03");
addVideoMessage("rag","lag",vid1, "14:03");
addTextMessage("lag", "rag","Thanks :)", "14:01");

addContact("rag","bjo");
addContact("bjo","rag");
addTextMessage("rag","bjo","Hello son!", "14:31");
addTextMessage("bjo", "rag","Hello father!", "14:50");
addTextMessage("rag","bjo","Here are some media file:", "15:01");
addPictureMessage("rag","bjo",pic2, "15:02");
addVideoMessage("rag","bjo",vid2, "15:03");
addTextMessage("bjo", "rag","thanks father :)", "15:16");

addContact("rag","rol");
addContact("rol","rag");
addTextMessage("rag","rol","Hello brother!", "16:50");
addTextMessage("rol", "rag","Hello Rangar", "16:51");
addTextMessage("rag","rol","Here are some media file:", "17:00");
addPictureMessage("rag","rol",pic3, "17:01");
addVideoMessage("rag","rol",vid3, "17:02");
addTextMessage("rol", "rag","Nice", "17:03");

addContact("rag","flo");
addContact("flo","rag");
addTextMessage("flo","rag","Hello Rangar!", "12:00");
addTextMessage("rag", "flo","Hello Floki", "13:51");
addTextMessage("flo","rag","Here are some media file:", "13:55");
addPictureMessage("flo","rag",pic4, "13:55");
addVideoMessage("flo","rag",vid4, "13:56");
addTextMessage("rag", "flo","God bless you", "13:56");

addContact("ecb","rol");
addContact("rol","ecb");
addTextMessage("ecb","rol","Hello Rollo!", "16:50");
addTextMessage("rol", "ecb","Hello King Ecbert", "16:51");
addTextMessage("ecb","rol","Here are some treats:", "17:00");
addPictureMessage("ecb","rol",pic5, "17:01");
addVideoMessage("ecb","rol",vid5, "17:02");
addTextMessage("rol", "ecb","God bless you", "17:03");

addContact("bjo","lag");
addContact("lag","bjo");
addTextMessage("bjo","lag","Mother!", "12:30");
addTextMessage("lag", "bjo","Yes son?", "12:31");
addTextMessage("bjo","lag","Here are some goodies:", "12:32");
addPictureMessage("bjo","lag",pic6, "12:33");
addVideoMessage("bjo","lag",vid6, "12:34");
addTextMessage("lag", "bjo","I rasied you well", "12:34");

addContact("ecb","flo");
addContact("flo","ecb");
addTextMessage("ecb","flo","Hello Floki!", "10:32");
addTextMessage("flo", "ecb","Hello Ecbert :)", "10:33");
addTextMessage("ecb","flo","Here are some media file:", "10:40");
addPictureMessage("ecb","flo",pic7, "10:41");
addVideoMessage("ecb","flo",vid7, "10:41");
addTextMessage("flo", "ecb","I thank you", "10:42");

export function getChatMessages(user, talkWith) {
    return usersChats.get(user).find(i => i.chatWith == talkWith).messages;
}

export function getUserChats(user) {
    return usersChats.get(user);
}

export function doesContactOfUserExist(user, talkWith) {
    if (getUserChats(user)?.find(i => i.chatWith == talkWith)) {
        return true;
    }
    return false;
}

export function addTextMessage(sender, talkWith, message, msgTime) {
    addMessage(sender, talkWith, message, msgTime, "text");
}

export function addPictureMessage(sender, talkWith, message, msgTime) {
    addMessage(sender, talkWith, message, msgTime, "picture");
}

export function addVideoMessage(sender, talkWith, message, msgTime) {
    addMessage(sender, talkWith, message, msgTime, "video");
}

export function addRecordMessage(sender, talkWith, message, msgTime) {
    addMessage(sender, talkWith, message, msgTime, "record");
}

function addMessage(sender, talkWith, message, msgTime, t) {
    getUserChats(sender)?.find(i => i.chatWith == talkWith).messages.push({
        msg: message,
        time: msgTime,
        sent: true,
        type: t
    })

    getUserChats(talkWith)?.find(i => i.chatWith == sender).messages.push({
        msg: message,
        time: msgTime,
        sent: false,
        type: t
    })
}

export function addContact(user, talkWith) {
    if (!doesUserExist(talkWith)) {
        return "This contact does not exist";
    } else {
        if (doesContactOfUserExist(user, talkWith)) {
            return "This contact is already your contact";
        }
        else {
            getUserChats(user).push({
                chatWith: talkWith,
                messages: []
            });
            return "";
        }
    }
}

export function lastMassageGenerator(user, talkWith) {

    var talk = getUserChats(user)?.find(i => i.chatWith == talkWith).messages;


    if (talk.length == 0) {
        return "New contact";
    }

    var lastMsg = talk[talk.length - 1];

    switch (lastMsg.type) {
        case "text": return lastMsg.msg;
        case "picture": return "Picture";
        case "video": return "Video";
        case "record": return "Voice Message";
    }
}

export function lastMassageGeneratorTime(user, talkWith) {

    var talk = getUserChats(user)?.find(i => i.chatWith == talkWith).messages;

    if (talk.length == 0) {
        return "No messages";
    }

    var lastMsg = talk[talk.length - 1];

    return lastMsg.time;
}