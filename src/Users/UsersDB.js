import ragnarPic from"./ragnar.png"
import lagerthaPic from"./Lagertha.jpg"
import bjornPic from"./bjorn.jpg"
import flokiPic from"./floki.jpg"
import rolloPic from"./rollo.jpg"
import ecbertPic from"./ecbert.jpg"


export const users = new Map();

users.set("rag",
    {
        password: "a1",
        nickname: "King Ragnar",
        picture: ragnarPic,
    });

users.set("lag",
    {
        password: "a1",
        nickname: "Lagertha",
        picture: lagerthaPic,
    });

users.set("bjo",
    {
        password: "a1",
        nickname: "Bjorn Lothbrok",
        picture: bjornPic,
    })

users.set("flo",
    {
        password: "a1",
        nickname: "Floki",
        picture: flokiPic,
    })

users.set("rol",
    {
        password: "a1",
        nickname: "Rollo",
        picture: rolloPic,
    })

users.set("ecb",
    {
        password: "a1",
        nickname: "King Ecbert",
        picture: ecbertPic,
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