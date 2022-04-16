import { useRef, useState } from "react";
import { addVideoMessage, addTextMessage,addPictureMessage } from "../../UsersChatDB";
import { OverlayTrigger, Popover } from "react-bootstrap"
import $ from "jquery";
import Recorder from "./Recorder";
import "./SendMsgBar.css"

function SendMsgBar(props) {

    const btnId = props.myUser.concat("-").concat(props.username);

    const textMsg = useRef("");

    $(document).ready(function (event) {
        $("#".concat(btnId).concat("-msg")).unbind("click").on("click", function () {
            const date = new Date();
            let time = date.getHours() + ":" + date.getMinutes();
            addTextMessage(props.myUser, props.username, textMsg.current.value, time);
            props.refreshChat();
            textMsg.current.value = "";
        })
<<<<<<< HEAD
        $("#msg_input").on("propertychange change keyup paste input", function () {
            $("#".concat(btnId)).prop('disabled', $("#msg_input").val() == "");
            console.log($("#msg_input").val());
        })
=======

>>>>>>> cc15c1fdecbf0c552e4608ce5bbd7c3ec205036c
    })

    const selectPic = () => {
        document.getElementById(btnId.concat("-img-input")).click();
    }

    const sendPic = (e) => {
        const date = new Date();
        let time = date.getHours() + ":" + date.getMinutes();
        addPictureMessage(props.myUser, props.username, e.target.files[0], time);
        props.refreshChat();
    }

    const selectVideo = () => {
        document.getElementById(btnId.concat("-img-input")).click();
    }

    const sendVideo = (e) => {
        const date = new Date();
        let time = date.getHours() + ":" + date.getMinutes();
        addVideoMessage(props.myUser, props.username, e.target.files[0], time);
        props.refreshChat();
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h1" className="popover-header">Record</Popover.Header>
            <Popover.Body>
                <Recorder></Recorder>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="card-footer">
            <div className="input-group">
                <div className="input-group-append">
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <button type="button" className="btn btn-outline-secondary input-group-text record_btn"><i className="bi bi-mic"></i></button>
                    </OverlayTrigger>
                </div>

                <div className="input-group-append">
                    <button id={btnId.concat("-img-btn")} type="button" onClick={selectPic} className="btn btn-outline-secondary input-group-text attach_img_btn" ><i className="bi bi-image"></i></button>
                    <input id={btnId.concat("-img-input")} onChange={sendPic} type="file" accept="image/*" hidden ></input>
                </div>
                <div className="input-group-append">
                    <button id={btnId.concat("-vid-btn")} type="button" onClick={selectVideo} className="btn btn-outline-secondary input-group-text attach_video_btn"><i className="bi bi-camera-reels"></i></button>
                    <input id={btnId.concat("-vid-input")} onChange={sendVideo} type="file" accept="video/*" hidden ></input>
                </div>
                <input className="type_msg form-control" ref={textMsg} placeholder="Type your message..." id="msg_input" ></input>
                <div className="input-group-append">
<<<<<<< HEAD
                    <button id={btnId} type="button" className="btn btn-outline-secondary input-group-text send_btn" disabled={true} ><i className="bi bi-envelope"></i></button>
=======
                    <button id={btnId.concat("-msg")} type="button" className="btn btn-outline-secondary input-group-text send_btn" ><i className="bi bi-envelope"></i></button>
>>>>>>> cc15c1fdecbf0c552e4608ce5bbd7c3ec205036c
                </div>
            </div>
        </div>
    );
}

export default SendMsgBar;