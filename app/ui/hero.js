import styles from './styles/hero.module.css'

export default function Hero() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.welcome}>
                    <h1>Jamie Thomas</h1>
                    <p>I'm Jamie Thomas, I'm a web developer from Oxfordshire. On this site, I have some information about myself, 
                        as well as a list of the projects I have worked on to date. You can also find my GitHub profile and contact 
                        information.</p>
                </div>
                <div className={styles.picture}>
                    <img src="snowdon.jpg" alt="Picture of me walking up Mount Snowden" />
                </div>
            </div>
        </>
    )
}