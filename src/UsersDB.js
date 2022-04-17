export const users = new Map();

users.set("admin",
    {
        password: "a1",
        nickname: "The Admin",
        picture: "https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg",
    });

users.set("yos",
    {
        password: "a1",
        nickname: "Yossi",
        picture: "https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png",
    });

users.set("osh",
    {
        password: "a1",
        nickname: "Osher",
        picture: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
    })

export function addNewUser(user, pass, nick, pic) {
    users.set(user,
        {
            password: pass,
            nickname: nick,
            picture: pic
        });
}

export function doesUserExist(user) {
    if (users.get(user)) {
        return true;
    }
    return false;
}

export function getUserPassword(user) {
    return users.get(user).password;
}

export function getUserNickname(user) {
    return users.get(user).nickname;
}


export function getUserPicture(user) {
    return users.get(user).picture;
}

export function setProfilePicture(user, pic) {
    users.get(user).picture = pic;
}