import UserChatInfo from "./chatPage/UserChatInfo";

export const users = new Map();

users.set("admin", 
{ 
    password: "a1", 
    nickname: "The Admin", 
    picture: "https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg",
    chats: new UserChatInfo()
});

users.set("yos", 
{ 
    password: "a1", 
    nickname: "Yossi", 
    picture: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
    chats: new UserChatInfo()
});

users.set("osh",
{
    password: "a1", 
    nickname: "Osher", 
    picture: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
    chats: new UserChatInfo()
})