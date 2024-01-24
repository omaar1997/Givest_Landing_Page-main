import React from "react";
import { Button, Card } from "react-bootstrap";
import "../CSS/Donate_Card.css";
import GradiantArrow from "../Images/arrow-line-right-gradient.png";
import Admin from "../Images/admin1.png";

export default function Donate_Card({ imgSrc }) {
    return (
        <div>
            <Card style={{ backgroundColor: '#F7F7F7', border: 'none', borderRadius: "0" }}>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <div className="d-flex justify-content-between my-3">
                        <Button className="donate_section_btn" variant="outline-secondary">Goal:{'\n'} $ 5,000</Button>
                        <Button className="donate_section_btn" variant="outline-secondary">Raised:{'\n'} $ 2,000</Button>
                        <Button className="donate_section_btn" variant="outline-secondary">To Go:{'\n'} $ 1,000</Button>
                    </div>
                    <Card.Title><a href="#" className="donate_card_title">Children Education {'\n'} Needs For Change The World.</a></Card.Title>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the industry's since the unknown.
                    </Card.Text>
                    <div className="d-flex justify-content-between mt-4">
                        <Button className="donate_admin_btn" variant="outline-secondary"> <img className="donate_admin_img" src={Admin} /> Kristin Horton</Button>
                        <Button className="donate_footer_btn" variant="outline-secondary">Donate Now
                            <img src={GradiantArrow} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}