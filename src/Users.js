export const users = new Map();

users.set("admin",
    {
        password: "a1",
        nickname: "The Admin",
        picture: "https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg",
        chats: new Map()
    });

users.set("yos",
    {
        password: "a1",
        nickname: "Yossi",
        picture: "https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png",
        chats: new Map()
    });

users.set("osh",
    {
        password: "a1",
        nickname: "Osher",
        picture: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
        chats: new Map()
    })



function getUserPicture(user) {
    return users.get(user).picture;
}



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