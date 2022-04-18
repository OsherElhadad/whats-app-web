# Getting Started

* Clone this repository
* Go to cloned folder on the CLI and enter the following commands:
- $ npm install
- $ npm install react-bootstrap bootstrap
- $ npm install react-router-dom

Now you are ready to start!
In oreder to open the website, go to the cloned folder on the CLI and enter the command :
$ npm start
<br>
All you need to do now is to wait for the website to open on you browser.

## Log-In Page

* this is the home page which allows you to log-in to the system and start chatting with your friends!
* In case you are not already signed, you can click the limk below the log-in button and sign-up.
* On successful log-in, you will be navigated to the chats screen.

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
When a picture is selected you can delete it by clicking on the red button on it's upper right corner.
Profile picture format must be one of the above: jpg/jpeg/png/svg. 
In case you select a file with diffrent format, a modal will apear to tell you about the error.
If you leave the field empty, a default picture will be set to your profile(but don't worry, you can change your profile picture in every moment - will be explaiend in the chat section).
