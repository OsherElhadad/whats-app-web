import "../Chat.css"

function ReciverMessage(props) {

    //get reciever messages from different types
    switch (props.type) {
        case "text": return (
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src={props.img} className="rounded-circle user_img_msg" alt="contact" />
                </div>
                <div className="msg_cotainer">
                    {props.msgText}
                    <span className="msg_time">{props.msgTime}</span>
                </div>
            </div>
        )

        case "picture": return (
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src={props.img} className="rounded-circle user_img_msg" alt="contact" />
                </div>
                <div className="msg_cotainer">
                    <img className="msg_cotainer_media" src={props.msgText} alt="msg"></img>
                    <span className="msg_time">{props.msgTime}</span>
                </div>
            </div>
        )

        case "video": return (
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src={props.img} className="rounded-circle user_img_msg" alt="contact" />
                </div>
                <div className="msg_cotainer">
                    <video controls className="msg_cotainer_media" src={props.msgText}></video>
                    <span className="msg_time">{props.msgTime}</span>
                </div>
            </div>
        )

        case "record": return (
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src={props.img} className="rounded-circle user_img_msg" alt="contact" />
                </div>
                <div className="msg_cotainer">
                    <audio controls className="msg_cotainer_media" src={props.msgText}></audio>
                    <span className="msg_time">{props.msgTime}</span>
                </div>
            </div>
        )
        
        default: ;
    }
}

export default ReciverMessage;