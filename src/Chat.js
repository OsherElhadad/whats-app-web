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
            className="btn btn-outline-secondary bg-dark border-bottom-0 border rounded-pill ms-n5"
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
                    <Col sm={4} className="vh-100 bg-light">
                        <ListGroup>
                            <ListGroup.Item>
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <div className="d-flex w-100 justify-content-between">
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
                                                <input type="search" className="form-control border-end-0 border rounded-pill" id="search-input" placeholder="Search contacts..." aria-label="Search contacts..." dir="auto" />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link1">
                                <Row>
                                    <Col sm={2}>
                                        <h3><i className="bi-person-circle"></i></h3>
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Yossix</h5>
                                            <small>5 hours ago</small>
                                        </div>
                                        <p className="mb-1">My brother, whatsup?</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                <Row>
                                    <Col sm={2}>
                                        <h3><i className="bi-person-circle"></i></h3>
                                    </Col>
                                    <Col sm={10}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Osher</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Hey bro how are you doin</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8} className="vh-100">
                        <Tab.Content className="vh-100">
                            <Tab.Pane eventKey="#link1" className="vh-100">
                                <div className="vh-100 bg-white">
                                    <div className="chat-body">
                                        <div className="message info">
                                            <img alt="" className="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png" />

                                            <div className="message-body">
                                                <div className="message-info">
                                                    <h4> Elon Musk </h4>
                                                    <h5> <i className="fa fa-clock-o"></i> 2:25 PM </h5>
                                                </div>
                                                <hr />
                                                <div className="message-text">
                                                    I've seen your new template, Dauphin, it's amazing !
                                                </div>
                                            </div>
                                            <br />
                                        </div>

                                        <div className="message my-message">
                                            <img alt="" className="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png" />

                                            <div className="message-body">
                                                <div className="message-body-inner">
                                                    <div className="message-info">
                                                        <h4> Dennis Novac </h4>
                                                        <h5> <i className="fa fa-clock-o"></i> 2:28 PM </h5>
                                                    </div>
                                                    <hr />
                                                    <div className="message-text">
                                                        Thanks, I think I will use this for my next dashboard system.
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                    </div>

                                    <div className="chat-footer">
                                        <textarea className="send-message-text"></textarea>
                                        <label className="upload-file">
                                            <input type="file" required />
                                            <i className="fa fa-paperclip"></i>
                                        </label>
                                        <button type="button" className="send-message-button btn-info"> <i className="fa fa-send"></i> </button>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                sdfsgdf
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Chat;