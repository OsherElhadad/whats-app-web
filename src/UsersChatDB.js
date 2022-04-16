export const usersChats = new Map();

var chats = [{
    chatWith: "yos",
    messages: [{ msg: "Hi! I am the admin!", time: "TimeHere", sent: true }, { msg: "Nice to meet you!", time: "TimeHere", sent: false }]
},

{
    chatWith: "osh",
    messages: [{ msg: "Hello! I'm Osher!", time: "TimeHere", sent: false }, { msg: "Cool! My Name Is Admin :)", time: "TimeHere", sent: true }]
}];

usersChats.set("admin", chats);

export function getChatMessages(user, talkWith) {
    return usersChats.get(user).find(i => i.chatWith == talkWith).messages;
}

export function getUserChats(user) {
    return usersChats.get(user);
}

export function addMessage(sender, talkWith, message) {
    getUserChats(sender)?.find(i => i.chatWith == talkWith).messages.push({
        msg: message,
        time: "TimeHere",
        sent: true
    })

    getUserChats(talkWith)?.find(i => i.chatWith == sender).messages.push({
        msg: message,
        time: "TimeHere",
        sent: false
    })
}