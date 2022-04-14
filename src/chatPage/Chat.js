import { Tab, ListGroup, Col, Row, Accordion, Card, useAccordionButton } from "react-bootstrap"
import "./Chat.css"

function SearchAwareToggle({ children, eventKey, callback }) {

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={decoratedOnClick}>
            <i className="fa fa-search"></i>
        </button>
    );
}

function AddContactAwareToggle({ children, eventKey, callback }) {

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={decoratedOnClick}>
            <i className="fa fa-users"></i>
        </button>
    );
}
function Chat() {
    return (
        <div>
            <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4} className="vh-100">
                        <div className="icons_item">
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <div className="d-flex justify-content-between">
                                            <SearchAwareToggle eventKey="0"></SearchAwareToggle>
                                            <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img_msg" />
                                            <button type="button" className="btn btn-outline-secondary">
                                                <i className="fa fa-power-off"></i>
                                            </button>
                                            <AddContactAwareToggle eventKey="1"></AddContactAwareToggle>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <input type="search" className="form-control type_msg" id="search-input" placeholder="Search contacts..." aria-label="Search contacts..." />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <div className="input-group">

                                                <input type="text" className="form-control type_msg" id="add-contact-input" placeholder="Add contacts..." aria-label="Add contacts..." />

                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-outline-secondary add_contact_btn">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <ListGroup className="contacts_list">
                            <ListGroup.Item action href="#link1" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Yossix</h5>
                                            <small>5 hours ago</small>
                                        </div>
                                        <p className="mb-1">Hi Yossix i am good thanks how about you?</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className="list_group_items">
                                <Row>
                                    <Col sm={2}>
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <div className="chat">
                                    <div className="contact_card vh-100">
                                        <div className="card-header msg_head">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Yossix</span>
                                                    <p>Was active 5 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body msg_card_body">
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you Osher?
                                                    <span className="msg_time">8:40, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you Osher?
                                                    <span className="msg_time">8:40, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you Osher?
                                                    <span className="msg_time">8:40, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                        </div>
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
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <div className="chat">
                                    <div className="contact_card vh-100">
                                        <div className="card-header msg_head">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Osher</span>
                                                    <p>Was active 2 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body msg_card_body">
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img_msg" />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you Osher?
                                                    <span className="msg_time">8:40, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img_msg" />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you Osher?
                                                    <span className="msg_time">8:40, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Yossix i am good thanks how about you?
                                                    <span className="msg_time_send">8:55, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img_msg" />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you Osher?
                                                    <span className="msg_time">8:40, Today</span>
                                                </div>
                                            </div>
                                        </div>
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
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Chat;