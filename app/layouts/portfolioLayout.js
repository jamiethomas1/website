import styles from "./styles/portfolioLayout.module.css"

export default function PortfolioLayout({children}) {
    return (
        <div className="relative min-h-screen min-w-full flex flex-col items-center" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className={styles.background} />
            <div id="navbar" className="p-6 min-w-full flex justify-around items-center">
                <div>Jamie Thomas</div>
                <ul id="links" className="flex justify-around space-x-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div id="page">
                {children}
            </div>
        </div>
    )
}