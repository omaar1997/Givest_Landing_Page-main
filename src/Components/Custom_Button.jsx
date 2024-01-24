import React from "react";
import { Button } from 'react-bootstrap';
import Arrow from '../Images/arrow-line-right2.png';
import '../CSS/Custom_Button.css'

export default function Custom_Button(props) {
    return (
        <Button className="Support_Btn" variant="outline-secondary">{props.text}
            <img src={Arrow} />
        </Button>
    )
}