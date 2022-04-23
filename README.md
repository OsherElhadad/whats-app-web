# Getting Started

* Make sure you have node.js installed on your computer.
* Clone this repository.
* Go to cloned folder on the CLI and enter the following commands:
- $ npm install
- $ npm install react-bootstrap
- $ npm install react-router-dom
- $ npm install jquery

Now you are ready to start!
In oreder to open the website, go to the cloned folder on the CLI and enter the command :
$ npm start
<br>
All you need to do now is to wait for the website to open on you browser.

## Log-In Page

* This is the home page which allows you to log-in to the system and start chatting with your friends!
* In case you are not already signed, you can click the link below the log-in button and sign-up.
* When successfully logged-in, you will be navigated to the chats screen.

## Sign-Up Page

* This page allows you to create your account.
* The username, password, verfiy password and nickname fields are requierd in order to sign up. In case one of the mentioned is empty or invalid(will be explanied in a bit), the system won't allow you to sign-up and the submit button will be disabled.
* When all required fields are filled and valid, the submit button will be un-disabled and you will be able to submit your request to sign-up.
* While typing in the input fields you will notice a dynamic message below the relavent field. In case the current input is valid, a green border will apear with a check sign and a "Looking good" message. On the other hand, if the current input is invalid, a red border will aprear with a X sign and a message to indicate the specific problem with the input.

Fields requirement in-depth:
- Username must be one word with length greater or equals to 2, without '-' or '_' characters.
- Password must be one word with length greater or equals to 2 and contatin at least one number and one letter characters.
- Verified Password must match the password.
- Nickname's length must be greater or equals to 2.
- The last field is optional and allows you to upload a proflie picture while signing in.
When a picture is selected you can delete it by clicking on the red button on it's upper right.
Profile picture format must be one of the following: jpg/jpeg/png/svg. 
In case you select a file with diffrent format, a modal will appear to notify you about the error.
If you leave the field empty, a default picture will be set to your profile(but don't worry, you can change your profile picture in every moment - will be explaiend in the chat section).

## Chats Page

* Once you logged-in, your contacts list will appear on the left side.
* Above the contacts list, you can see 4 buttons. From left to right -
* Profile Picture - Your profile picture is also a button. Once clicked on, you can choose a new profile picture from your computer. Profile picture format must be one of the following: jpg/jpeg/png/svg as mentioned above. 
In case you select a file with diffrent format, a modal will appear to notify you about the error.
* Add new contact - Enter username of wanted contact in order to add him to your contacts list! While typing, a dynamic message will appear along with the fiting border color to indicate if current input is: a valid username or a non exsiting username/a contact that already exist on your contacts list/your username itself.
Once you enter a valid username, you can add him by pressing the "Enter" key on your keyboard or by clicking the plus button.
* The search button - Once you click it, you can enter text in order to dynamically filter by it. Only contacts on your contacts list that the current input is a substring to thier nickname will appear on your contacts list(not a case sensitive filter).
* Sign-Off - Once clicked on, a modal will appear to ask if you are sure you want to sign-out. You can choose your action by the relavent button.

As for the chat itself - In order to open a chat just click on the desired contact!
* Upon sending a new message or hoevring on the chat window, it will auto scroll to display the lastest messages in the current chat. 
* You can send text messages by clicking on the envelope button or pressing the "Enter" key. You can't send an empty message.
* The microphone button allows you to send a voice message. Once clicked, a popover will appear. In order to start a new recording press the "start" button and press the "stop" button to stop recording. You can hear your voice message before sending it by clicking on the play button. If you want to re-record just click again on the "start" button in order to overwrite the last message. When you are ready, you may press the send button to deliver the recording to the contact.
When the popover is open, it will close upon a click on the microphone button/a click outside of the popover area/a click on the send record. Be aware that if you have an unsent recored that is ready to be sent, exsiting the popover will delete the record.
* The picture button allows you to send pictures. Once clicked on, you can choose a picture from your computer. The picture format must be one of the following: jpg/jpeg/png/svg. 
In case you select a file with diffrent format, a modal will appear to notify you about the error.
* The videos button allows you to send a video. Once clicked on, you can choose a video from your computer. The video format must be one of the following: mp4/mkv/avi/wmv/mov/flv. 
In case you select a file with diffrent format, a modal will appear to notify you about the error.

## Hard-Coded Data Base

The DB contains 6 hard coded users:
* Username: rag, Password: a1, Nickname: King Ragnar
* Username: lag, Password: a1, Nickname: Lagertha
* Username: bjo, Password: a1, Nickname: Bjorn Lothbrok
* Username: flo, Password: a1, Nickname: Floki
* Username: rol, Password: a1, Nickname: Rollo
* Username: ecb, Password: a1, Nickname: King Ecbert

King Ragnar has an exsiting chat with all other 5 users.
Every other user has an additional exsiting chat besides the one with King Ragnar.
