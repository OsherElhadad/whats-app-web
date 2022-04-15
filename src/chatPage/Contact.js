import { Col, Row} from "react-bootstrap"

function Contact(props) {
    return (
        <Row>
            <Col sm={2}>
                <img src={props.image} className="rounded-circle user_img_msg" />
            </Col>
            <Col sm={10}>
                <div className="d-flex justify-content-between">
                    <h5 className="mb-1">{props.username}</h5>
                    <small>{props.lastTime}</small>
                </div>
                <p className="mb-1">{props.lastMsg}</p>
            </Col>
        </Row>
    )

}

export default Contact;