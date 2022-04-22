import { Col, Row, ListGroup } from "react-bootstrap";

function Contact(props) {

    return (
        <ListGroup.Item action href={"#".concat(props.link)} className="list_group_items">
            <Row>
                <Col sm={2}>
                    <img src={props.image} className="rounded-circle user_img_msg" alt="contact" />
                </Col>
                <Col sm={10}>
                    <div className="d-flex justify-content-between">
                        <h5 className="mb-1">{props.usernick}</h5>
                        <small>{props.lastTime}</small>
                    </div>
                    <p className="mb-1 last_msg">{props.lastMsg}</p>
                </Col>
            </Row>
        </ListGroup.Item>
    )

}

export default Contact;