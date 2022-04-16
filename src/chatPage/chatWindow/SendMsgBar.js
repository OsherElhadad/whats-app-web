import { useRef } from "react";
import { usersChats } from "../../Users";
import $ from "jquery";

function SendMsgBar(props) {

    const btnId = props.myUser.concat("-").concat(props.username);

    const textMsg = useRef("");

    $(document).ready(function () {
        $("#".concat(btnId)).unbind("click").on("click", function (event) {
            console.log(textMsg.current.value);
            console.log(usersChats.get(props.myUser).find(i => i.chatWith == props.username).messages);
            usersChats.get(props.myUser).find(i => i.chatWith == props.username).messages.push({
                msg: textMsg.current.value,
                time: "TimeHere",
                sent: true
            })
        })
    })

    return (
        <div className="card-footer">
            <div className="input-group">
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary input-group-text record_btn"><i className="fa fa-microphone"></i></button>
                </div>
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary input-group-text attach_img_btn"><i className="fa fa-picture-o"></i></button>
                </div>
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary input-group-text attach_video_btn"><i className="fa fa-video-camera"></i></button>
                </div>
                <input className="form-control type_msg" ref={textMsg} placeholder="Type your message..."></input>
                <div className="input-group-append">
                    <button id={btnId} type="button" className="btn btn-outline-secondary input-group-text send_btn" ><i className="fa fa-send-o"></i></button>
                </div>
            </div>
        </div>
    );
}

export default SendMsgBar;