'use client'

import { useRef } from "react"

import Hero from "../ui/hero"
import About from "../ui/about"

import styles from "./styles/portfolioLayout.module.css"


export default function PortfolioLayout() {
    
    const aboutRef = useRef(null);

    const aboutScroll = () => aboutRef.current.scrollIntoView();

    return (
        <>
            <div className="relative min-h-screen min-w-full flex flex-col items-center">
                <div className={styles.background} />
                <div id="navbar" className="p-6 min-w-full max-h-28 flex justify-around items-center">
                    <img className="logo" src="/logo-test.png" alt="Jamie Thomas" style={{"max-width": "10%"}} />
                    <ul id="links" className="flex justify-around space-x-10">
                        <li className={styles.selected}>Home</li>
                        <li onClick={aboutScroll}><a href="#about">About</a></li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div id="hero" className="min-w-full min-h-full flex flex-col items-center">
                    <Hero />
                </div>
            </div>
            <div ref={aboutRef} id="about" className="min-w-full min-h-screen flex flex-col items-center">
                <About />
            </div>
        </>
    )
}