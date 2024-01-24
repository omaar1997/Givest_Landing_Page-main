import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../CSS/About_Us.css";
import Custom_Button from "../Components/Custom_Button";
import Boy from "../Images/Boy.png";
import Mom from "../Images/Mom.png";
import Check from "../Images/check-double-line.png";
import Section_Title from "./Section_Title";

export default function About_Us() {
    return (
        <Container className="mt-5">
            <div>
                < Section_Title text={"About Us"} />
            </div>
            <Row className="mt-3">
                <h2 className="about_title">
                    <span className="about_custom_word">Givest</span> is The Non Profitable Organization.
                </h2>
            </Row>
            <Row>
                <Col xs={12} md={6} lg={6} xl={7}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4}>
                            <img src={Boy} />
                        </Col>
                        <Col sm={8} md={8} lg={12} xl={8}>
                            <img src={Mom} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} lg={6} xl={5}>
                    <div>
                        <span className="paragraph_dash" />
                        <p className="paragraph_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard.</p>
                    </div>
                    <Row className="ms-4 mb-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    </Row>
                    <Row className="ms-4 mb-4">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    </Row>
                    <Row className="ms-4 mb-0 about_footer">
                        <Col xl={5}>
                            <Row className="d-flex flex-nowrap align-items-start justify-content-evenly mb-4 ms-3">
                                <img src={Check} className="check_img" />
                                <h6 className="p-0">Need your simple help for save children.</h6>
                            </Row>
                        </Col>
                        <Col className="d-flex justify-content-center" xl={2}>
                            <span className="footer_dash" />
                        </Col>
                        <Col xl={5}>
                            <Row className="d-flex flex-nowrap align-items-start justify-content-evenly mb-4  me-3">
                                <img src={Check} className="check_img" />
                                <h6 className="p-0">Need your simple help for save children.</h6>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="ms-4 mt-4 mb-5">
                        <Custom_Button text={"Donate Now"} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}