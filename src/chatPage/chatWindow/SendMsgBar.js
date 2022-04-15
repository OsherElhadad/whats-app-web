function SendMsgBar() {
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
                <input className="form-control type_msg" placeholder="Type your message..."></input>
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary input-group-text send_btn"><i className="fa fa-send-o"></i></button>
                </div>
            </div>
        </div>
    );
}

export default SendMsgBar;