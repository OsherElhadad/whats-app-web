import "../Chat.css"

function SenderMessage(props) {

    //get sender messages from different types
    switch (props.type) {
        case "text": return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    {props.msgText}
                    <span className="msg_time_send">{props.msgTime}</span>
                </div>
                <div className="img_cont_msg">
                </div>
            </div>
        )

        case "picture": return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    <img className="msg_cotainer_media" src={props.msgText} alt="msg"></img>
                    <span className="msg_time_send">{props.msgTime}</span>
                </div>
                <div className="img_cont_msg">
                </div>
            </div>
        )

        case "video": return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    <video controls className="msg_cotainer_media" src={props.msgText}></video>
                    <span className="msg_time_send">{props.msgTime}</span>
                </div>
                <div className="img_cont_msg">
                </div>
            </div>
        )

        case "record": return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    <audio controls className="msg_cotainer_media msg_record" src={props.msgText}></audio>
                    <span className="msg_time_send">{props.msgTime}</span>
                </div>
                <div className="img_cont_msg">
                </div>
            </div>
        )

        default: ;
    }
}

export default SenderMessage;