import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import children from "../Images/Donate_Children.png";
import grand from "../Images/Donate_Grand.png";
import boy from "../Images/Donate_Boy.png";
import donate_background from "../Images/Donate_bg.png";
import Donate_Card from "./Donate_Card";
import Section_Title from "./Section_Title";

export default function Donate_Card_Section() {
    return (
        <Container className="my-5">
            <div className="d-flex justify-content-center my-5">
                <Section_Title text={"Check Causes"} />
            </div>
            <Row className="d-flex justify-content-center">
                <h2 className="check_title">
                    Donate For Poor People. Causes of Givest
                    <img className="donate_bg" src={donate_background} />
                </h2>
            </Row>
            <Row>
                <Col md={6} lg={4} xl={4}>
                    <Donate_Card imgSrc={children} />
                </Col>
                <Col md={6} lg={4} xl={4}>
                    <Donate_Card imgSrc={grand} />
                </Col>
                <Col md={6} lg={4} xl={4}>
                    <Donate_Card imgSrc={boy} />
                </Col>
            </Row>

        </Container>
    )
}