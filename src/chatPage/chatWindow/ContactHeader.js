function ContactHeader(props) {
    return (
        <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
                <div className="img_cont">
                    <img src={props.image} className="rounded-circle user_img" />
                </div>
                <div className="user_info">
                    <span>{props.nickname}</span>
                    <p>{props.lastActive}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactHeader;