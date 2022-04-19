import { useRef, useState } from "react";
import { addVideoMessage, addTextMessage, addPictureMessage } from "../../Users/UsersChatDB";
import { OverlayTrigger, Popover } from "react-bootstrap"
import $ from "jquery";
import InvalidFileModal from "../../InvalidFileModal";
import Recorder from "./Recorder";
import "./SendMsgBar.css"

function SendMsgBar(props) {

    const btnId = props.myUser.concat("-").concat(props.username);

    const textMsg = useRef("");

    $(document).ready(function (event) {

        // send media handler (close record popup)
        $(document).unbind("click").on("click", function (e) {
            if (($(e.target).hasClass("media"))) {
                return;
            }

            if (isRecordOpen && !($(e.target).hasClass("popover-member")) && !($(e.target).hasClass("popover-btn"))) {
                document.getElementById(btnId.concat("-popoverBtn")).click();
            }
        });

        // click enter handler (send message)
        $("#".concat(btnId).concat("-msg-input")).bind("keypress", function (e) {
            if (e.keyCode === 13) {
                document.getElementById(btnId.concat("-msg")).click();
            }
        })

        // send message handler
        $("#".concat(btnId).concat("-msg")).unbind("click").on("click", function () {
            const date = new Date();
            let time = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
            addTextMessage(props.myUser, props.username, textMsg.current.value, time);
            props.refreshChat();
            textMsg.current.value = "";
            $("#".concat(btnId).concat("-msg")).prop('disabled', $("#".concat(btnId).concat("-msg-input")).val() === "");
        })
        $("#".concat(btnId).concat("-msg-input")).on("propertychange change keyup paste input", function () {
            $("#".concat(btnId).concat("-msg")).prop('disabled', $("#".concat(btnId).concat("-msg-input")).val() === "");
        })
    })

    const selectPic = () => {
        if (isRecordOpen) {
            document.getElementById(btnId.concat("-popoverBtn")).click();
        }
        document.getElementById(btnId.concat("-img-input")).click();
    }

    const validatePic = (pic) => {
        var fileName = pic.name;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

        if (extFile === "jpg" || extFile === "jpeg" || extFile === "png" || extFile === "svg") {
            return true;
        }
        return false;
    }

    const [isModelOpen, setIsModelOpen] = useState(false);

    const [modalText, setModalText] = useState("");

    const showModal = () => {
        setIsModelOpen(true);
    };
    const hideModal = () => {
        setIsModelOpen(false);
    };

    const sendPic = (e) => {
        if (validatePic(e.target.files[0])) {
            const date = new Date();
            let time = date.getHours() + ":" + date.getMinutes();
            addPictureMessage(props.myUser, props.username, URL.createObjectURL(e.target.files[0]), time);
            props.refreshChat();
        }
        else {
            setModalText("Picture format must be one of the following: jpg/jpeg/png/svg");
            showModal();
        }
    }

    const validateVid = (vid) => {
        var fileName = vid.name;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

        if (extFile === "mp4" || extFile === "mkv" || extFile === "avi" || extFile === "wmv" || extFile === "mov" || extFile === "flv") {
            return true;
        }
        return false;
    }

    const selectVideo = () => {
        if (isRecordOpen) {
            document.getElementById(btnId.concat("-popoverBtn")).click();
        }
        document.getElementById(btnId.concat("-vid-input")).click();
    }

    const sendVideo = (e) => {
        if (validateVid(e.target.files[0])) {
            const date = new Date();
            let time = date.getHours() + ":" + date.getMinutes();
            addVideoMessage(props.myUser, props.username, URL.createObjectURL(e.target.files[0]), time);
            props.refreshChat();
        } else {
            setModalText("Video format must be one of the following: mp4/mkv/avi/wmv/mov/flv");
            showModal();
        }
    }

    const [isRecordOpen, setIsRecordOpen] = useState(false);

    const showRecordPopover = () => {
        setIsRecordOpen(true);
    }

    const hideRecordPopover = () => {
        setIsRecordOpen(false);
    }

    const microphoneClicked = () => {
        if (!isRecordOpen) {
            showRecordPopover();
        } else {
            hideRecordPopover();
        }

    }

    const popover = (
        <Popover className="popover-basic popover-member">
            <Popover.Header as="h1" className="popover-header popover-member">Record</Popover.Header>
            <Popover.Body className="popover-member">
                <Recorder className="popover-member" myUser={props.myUser} username={props.username} refreshChat={props.refreshChat} btnId={btnId}></Recorder>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <InvalidFileModal isOpen={isModelOpen} hideModal={hideModal} text={modalText}></InvalidFileModal>
            <div className="card-footer">
                <div className="input-group">
                    <div className="input-group-append">
                        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                            <button id={btnId.concat("-popoverBtn")} type="button" className="btn btn-outline-secondary input-group-text record_btn popover-btn" onClick={microphoneClicked}><i className="bi bi-mic popover-btn"></i></button>
                        </OverlayTrigger>
                    </div>
                    <div className="input-group-append">
                        <button id={btnId.concat("-img-btn")} type="button" onClick={selectPic} className="btn btn-outline-secondary input-group-text attach_img_btn media"><i className="bi bi-image"></i></button>
                        <input id={btnId.concat("-img-input")} onChange={sendPic} type="file" accept="image/*" className="media" hidden></input>
                    </div>
                    <div className="input-group-append">
                        <button id={btnId.concat("-vid-btn")} type="button" onClick={selectVideo} className="btn btn-outline-secondary input-group-text attach_video_btn media"><i className="bi bi-camera-reels"></i></button>
                        <input id={btnId.concat("-vid-input")} onChange={sendVideo} type="file" accept="video/*" className="media" hidden ></input>
                    </div>
                    <input className="type_msg form-control" ref={textMsg} placeholder="Type your message..." id={btnId.concat("-msg-input")} ></input>
                    <div className="input-group-append">
                        <button id={btnId.concat("-msg")} type="button" className="btn btn-outline-secondary input-group-text send_btn" disabled={true} ><i className="bi bi-envelope"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SendMsgBar;