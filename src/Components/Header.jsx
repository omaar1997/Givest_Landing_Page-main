import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Header.css';
import Logo from '../Images/logo.png';
import Custom_Button from "./Custom_Button";

export default function Header() {
    return (
        <header className="head">
            <Container className="container">
                <Row className="justify-content-between p-3 align-items-center">
                    <Col md="auto">
                        <a className="btn" variant="outline-secondary">
                            <img src={Logo} />
                        </a>
                    </Col>
                    <Col md="auto">
                        <a className="btn" variant="outline-secondary" active="true">Home</a>
                    </Col>
                    <Col md="auto">
                        <a className="btn" variant="outline-secondary">About Us</a>
                    </Col>
                    <Col md="auto">
                        <a className="btn" variant="outline-secondary">Causes</a>
                    </Col>
                    <Col md="auto">
                        <a className="btn" variant="outline-secondary">Blog</a>
                    </Col>
                    <Col md="auto">
                        <a className="btn" variant="outline-secondary">Pages</a>
                    </Col>
                    <Col md="auto">
                        <a className="btn" variant="outline-secondary">Contact Us</a>
                    </Col>
                    <Col md="auto">
                        <Custom_Button text="Give Support" />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}