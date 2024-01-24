import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../CSS/Hero_Card_Section.css";
import card_icon from "../Images/card_icon.png";
import Arrow from "../Images/arrow-line-right2.png";

export default function Hero_Card({ card_img, card_title, card_background }) {

    return (
        <div style={{ backgroundColor: card_background, padding: '52px 47px 44px 58px' }}>
            <Row className="d-flex flex-nowrap align-items-center justify-content-start">
                <Col className="ms-3">
                    <img className="card_img" src={card_img} />
                </Col>
                <Col className="card_title_position">
                    <h4 className="card_title">{card_title}</h4>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start mt-3">
                <img className="card_icon" src={card_icon} />
            </Row>
            <Row className="d-flex justify-content-start">
                <p className="card_text">Lorem Ipsum is simply dummy text the printing typesetng industry lorem Ipsum has been industry standard dummy text ever since.</p>
            </Row>
            <Row className="d-flex justify-content-start">
                <Button className="card_btn" variant="outline-secondary">View Details
                    <img src={Arrow} />
                </Button>
            </Row>
        </div>

    )
}