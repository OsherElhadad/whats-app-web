import { Tab, ListGroup, Col, Row, Accordion, Card, useAccordionButton } from "react-bootstrap"
import "./Chat.css"

function ContextAwareToggle({ children, eventKey, callback }) {

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <button
            type="button"
            className="btn btn-outline-secondary bg-dark rounded-pill"
            onClick={decoratedOnClick}>
            <i className="fa fa-search"></i>
        </button>
    );
}

function Chat() {
    return (
        <div>
            <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4} className="contacts_list vh-100">
                        <ListGroup>
                            <ListGroup.Item className="icons_item">
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <div className="d-flex justify-content-between">
                                                <ContextAwareToggle eventKey="0">
                                                </ContextAwareToggle>
                                                <h3>
                                                    <i className="bi-person-circle"></i>
                                                </h3>
                                                <h3>
                                                    <i className="bi-person-plus"></i>
                                                </h3>
                                            </div>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <input type="search" className="form-control type_msg" id="search-input" placeholder="Search contacts..." aria-label="Search contacts..." />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </ListGroup.Item>
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
                                                    <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                                                </div>
                                                <input name="" className="form-control type_msg" placeholder="Type your message..."></input>
                                                <div className="input-group-append">
                                                    <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
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
                                            <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                                        </div>
                                        <input className="form-control type_msg" placeholder="Type your message..."></input>
                                        <div className="input-group-append">
                                            <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
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