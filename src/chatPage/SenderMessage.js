function SenderMessage(props) {
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

export default SenderMessage;