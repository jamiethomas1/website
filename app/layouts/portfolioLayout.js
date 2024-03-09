'use client'

import { useRef } from "react"

import Hero from "../components/hero"
import About from "../components/about"
import Navbar from "../components/navbar"

import styles from "./styles/portfolioLayout.module.css"


export default function PortfolioLayout() {
    
    const aboutRef = useRef(null);

    const aboutScroll = () => aboutRef.current.scrollIntoView();

    return (
        <>
            <section className="relative min-h-screen min-w-full flex flex-col items-center">
                <div className={styles.background} />
                <Navbar />
                <div id="hero" className="min-w-full min-h-full flex flex-col items-center">
                    <Hero />
                </div>
                <div id="about-arrow">
                    <a href="#about" onClick={aboutScroll}>ABOUT ME</a>
                </div>
            </section>
            <section ref={aboutRef} id="about" className="min-w-full min-h-screen flex flex-col items-center">
                <About />
            </section>
        </>
    )
}