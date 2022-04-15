function Message(props) {
    return (
        <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
                <img src={props.img} className="rounded-circle user_img_msg" />
            </div>
            <div className="msg_cotainer">
                {props.msgText}
                <span className="msg_time">{props.msgTime}</span>
            </div>
        </div>
    )
}

export default Message;