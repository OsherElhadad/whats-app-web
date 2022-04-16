import "../Chat.css"

function SenderMessage(props) {

    if(props.type == "video") {
        return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    <video className="msg_cotainer_media" src={URL.createObjectURL(props.msgText)}></video>
                    <span className="msg_time_send">{props.msgTime}</span>
                </div>
                <div className="img_cont_msg">
                </div>
            </div>
        )
    }

    if (props.type == "text") {
        return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    {props.msgText}
                    <span className="msg_time_send">{props.msgTime}</span>
                </div>
                <div className="img_cont_msg">
                </div>
            </div>
        )
    }

    if (props.type == "picture") {
        return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    <img className="msg_cotainer_media" src={URL.createObjectURL(props.msgText)}></img>
                    <span className="msg_time_send">{props.msgTime}</span>
                </div>
                <div className="img_cont_msg">
                </div>
            </div>
        )
    }


}

export default SenderMessage;