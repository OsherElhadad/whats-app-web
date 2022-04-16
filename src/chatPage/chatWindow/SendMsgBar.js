import { useRef } from "react";
import { getUserChats , addMessage } from "../../UsersChatDB";
import $ from "jquery";

function SendMsgBar(props) {

    const btnId = props.myUser.concat("-").concat(props.username);

    const textMsg = useRef("");

    $(document).ready(function () {
        $("#".concat(btnId)).unbind("click").on("click", function (event) {
            console.log(textMsg.current.value);
            console.log(getUserChats(props.myUser).find(i => i.chatWith == props.username).messages);
            addMessage(props.myUser, props.username, textMsg.current.value);

            console.log("comon");

            props.refreshChat();
        })
    })

    return (
        <div className="card-footer">
            <div className="input-group">
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary input-group-text record_btn"><i className="bi bi-mic"></i></button>
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