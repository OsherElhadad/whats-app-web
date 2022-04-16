import { doesUserExist } from "./UsersDB";

export const usersChats = new Map();

var chats = [{
    chatWith: "yos",
    messages: [{ msg: "Hi! I am the admin!", time: "TimeHere", sent: true, type: "text" }, { msg: "Nice to meet you!", time: "TimeHere", sent: false, type: "text" }]
},

{
    chatWith: "osh",
    messages: [{ msg: "Hello! I'm Osher!", time: "TimeHere", sent: false , type: "text"}, { msg: "Cool! My Name Is Admin :)", time: "TimeHere", sent: true, type: "text" }]
}];

usersChats.set("admin", chats);

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

export function addContact(user, talkWith, error) {
    if (!doesUserExist(talkWith)) {
        error = "This contact does not exist";
    } else {
        if(doesContactOfUserExist(user, talkWith)) {
            error = "This contact is already your contact"
        }
        else {
            getUserChats(user).push({
                chatWith: talkWith,
                messages: []
            })
        }
    }
}