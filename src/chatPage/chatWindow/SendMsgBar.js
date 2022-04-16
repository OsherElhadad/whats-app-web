import { useRef } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap"
import { getUserChats, addMessage } from "../../UsersChatDB";
import $ from "jquery";
import Recorder from "./Recorder";
import "./SendMsgBar.css"

function SendMsgBar(props) {

    const btnId = props.myUser.concat("-").concat(props.username);

    const textMsg = useRef("");

    $(document).ready(function (event) {
        $("#".concat(btnId)).unbind("click").on("click", function () {
            const date = new Date();
            let time = date.getHours() + ":" + date.getMinutes();
            addMessage(props.myUser, props.username, textMsg.current.value, time);
            props.refreshChat();
            textMsg.current.value = "";
        })
    })

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
                    <button type="button" className="btn btn-outline-secondary input-group-text attach_img_btn"><i className="bi bi-image"></i></button>
                </div>
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary input-group-text attach_video_btn"><i className="bi bi-camera-reels"></i></button>
                </div>
                <input className="type_msg form-control" ref={textMsg} placeholder="Type your message..."></input>
                <div className="input-group-append">
                    <button id={btnId} type="button" className="btn btn-outline-secondary input-group-text send_btn" ><i className="bi bi-envelope"></i></button>
                </div>
            </div>
        </div>
    );
}

export default SendMsgBar;