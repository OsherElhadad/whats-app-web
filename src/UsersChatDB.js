import { doesUserExist } from "./UsersDB";

export const usersChats = new Map();

var adminChats = [{
    chatWith: "yos",
    messages: [{ msg: "Hi! I am the admin!", time: "13:00", sent: true, type: "text" }, { msg: "Nice to meet you!", time: "13:01", sent: false, type: "text" }]
},

{
    chatWith: "osh",
    messages: [{ msg: "Hello! I'm Osher!", time: "14:00", sent: false , type: "text"}, { msg: "Cool! My Name Is Admin :)", time: "14:01", sent: true, type: "text" }]
}];

usersChats.set("admin", adminChats);

usersChats.set("sag" ,[]);

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
        if(doesContactOfUserExist(user, talkWith)) {
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

    switch(lastMsg.type){
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