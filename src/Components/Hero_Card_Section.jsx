import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import water from "../Images/water_icon.png";
import food from "../Images/Food.png";
import meds from "../Images/Meds.png";
import Hero_Card from "./Hero_Card";

export default function Hero_Card_Section() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} lg={4} xl={4}>
                    <Hero_Card card_background="#fc6539" card_img={water} card_title="Clean Water" />
                </Col>
                <Col md={6} lg={4} xl={4}>
                    <Hero_Card card_background="#001D23" card_img={food} card_title="Healthy Food" />
                </Col>
                <Col md={6} lg={4} xl={4}>
                    <Hero_Card card_background="#FEA444" card_img={meds} card_title="Medical Help" />
                </Col>
            </Row>

        </Container>
    )
}