import Hero from "../ui/hero"
import About from "../ui/about"

import styles from "./styles/portfolioLayout.module.css"

export default function PortfolioLayout({children}) {
    return (
        <>
            <div className="relative min-h-screen min-w-full flex flex-col items-center">
                <div className={styles.background} />
                <div id="navbar" className="p-6 min-w-full flex justify-around items-center">
                    <h1>Jamie Thomas</h1>
                    <ul id="links" className="flex justify-around space-x-10">
                        <li className={styles.selected}>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div id="hero" className="min-w-full min-h-full flex flex-col items-center">
                    <Hero />
                </div>
            </div>
            <div id="about" className="min-w-full min-h-screen flex flex-col items-center">
                <About />
            </div>
        </>
    )
}