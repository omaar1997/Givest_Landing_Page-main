import React from "react";
import { Row } from "react-bootstrap";
import "../CSS/About_Us.css";

export default function Section_Title(props) {
    return (
        <Row className="d-flex align-items-center ms-1">
            <span className="about_dash" />
            <h5 className="about_head">{props.text}</h5>
        </Row>
    )
}