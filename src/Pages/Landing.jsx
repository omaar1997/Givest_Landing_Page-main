import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About_Us from "../Components/About_Us";
import Hero_Card_Section from "../Components/Hero_Card_Section";
import Donate_Card_Section from "../Components/Donate_Card_Section";


export default function Landing() {
    return (
        <div>
            <Header />
            <Hero />
            <Hero_Card_Section />
            <About_Us />
            <Donate_Card_Section />
        </div>
    )
}