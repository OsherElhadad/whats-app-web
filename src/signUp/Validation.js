import {users} from "../Users";

export const validateUsername = (name) => {
    if ((!(validateSpaces(name, "usernameInvalidFeedback", "Username must be one word!", "SignUpUsername")))
        || (!(validateLength(name, 2, "usernameInvalidFeedback", "Username must contain at least two characters!", "SignUpUsername"))
            || (!(validateUniqueUsername(name, "usernameInvalidFeedback", "Username alreay exists!", "SignUpUsername"))))) {
        return false;
    }
    return true;
}

export const validatePassword = (pass, rePass) => {
    if ((!(validateSpaces(pass, "passwordInvalidFeedback", "Password must be one word!", "SignUpPassword")))
        || (!(validateLength(pass, 2, "passwordInvalidFeedback", "Password must contain at least two characters!", "SignUpPassword")))
        || (!(validateNumberAndLetter(pass, "passwordInvalidFeedback", "Password must contain a number and a letter!", "SignUpPassword")))) {
        return false;
    }
    validateRepeatedPassword(pass, rePass);
    return true;
}

export const validateRepeatedPassword = (pass, rePass) => {
    if (pass != rePass) {
        document.getElementById("rePasswordInvalidFeedback").innerHTML = "Passwords doesn't match. Please try again.";
        document.getElementById("SignUpRePassword").classList.add('is-invalid');
        document.getElementById("SignUpRePassword").classList.remove('is-valid');
        return false;
    }
    document.getElementById("SignUpRePassword").classList.remove('is-invalid');
    document.getElementById("SignUpRePassword").classList.add('is-valid');
    return true;
}

export const validateNickname = (nick) => {
    if (!(validateLength(nick, 2, "nicknameInvalidFeedback", "Nickname must contain at least two characters!", "SignUpNickname"))) {
        return false;
    }
    return true;
}

export const validateUniqueUsername = (str, errorId, errorHtml, parentId) => {
    if (users.some(e => e.username == str)) {
        document.getElementById(errorId).innerHTML = errorHtml;
        document.getElementById(parentId).classList.remove('is-valid');
        document.getElementById(parentId).classList.add('is-invalid');
        return false;
    }
    document.getElementById(parentId).classList.add('is-valid');
    document.getElementById(parentId).classList.remove('is-invalid');
    return true;
}

export const validateSpaces = (str, errorId, errorHtml, parentId) => {
    if (/\s/.test(str)) {
        document.getElementById(errorId).innerHTML = errorHtml;
        document.getElementById(parentId).classList.remove('is-valid');
        document.getElementById(parentId).classList.add('is-invalid');
        return false;
    }
    document.getElementById(parentId).classList.add('is-valid');
    document.getElementById(parentId).classList.remove('is-invalid');
    return true;
}

export const validateLength = (str, len, errorId, errorHtml, parentId) => {
    if ((str && str.length < len) || (str == "")) {
        document.getElementById(errorId).innerHTML = errorHtml;
        document.getElementById(parentId).classList.remove('is-valid');
        document.getElementById(parentId).classList.add('is-invalid');
        return false;
    }
    document.getElementById(parentId).classList.add('is-valid');
    document.getElementById(parentId).classList.remove('is-invalid');
    return true;
}

export const validateNumberAndLetter = (str, errorId, errorHtml, parentId) => {
    if (!(/\d/.test(str) && /[a-zA-Z]/.test(str))) {
        document.getElementById(errorId).innerHTML = errorHtml;
        document.getElementById(parentId).classList.remove('is-valid');
        document.getElementById(parentId).classList.add('is-invalid');
        return false;
    }
    document.getElementById(parentId).classList.add('is-valid');
    document.getElementById(parentId).classList.remove('is-invalid');
    return true;
}