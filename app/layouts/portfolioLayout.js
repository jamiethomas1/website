'use client'

import Hero from "../components/hero"
import Navbar from "../components/navbar"

import styles from "./styles/portfolioLayout.module.css"


export default function PortfolioLayout() {

    return (
        <>
            <section className="relative min-h-screen min-w-full flex flex-col items-center">
                <div className={styles.background} />
                <Navbar />
                <div id="hero" className="min-w-full min-h-full flex flex-col items-center">
                    <Hero />
                </div>
            </section>
        </>
    )
}