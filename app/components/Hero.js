import styles from './styles/Hero.module.css'

export default function Hero() {
    return (
        <>
        <div className={styles.background} />
        <div id="hero" className="min-w-full min-h-full flex flex-col items-center">
                <div className={styles.hero}>
                    <div className={styles.welcome}>
                        <h1>Hi, I'm Jamie Thomas</h1>
                        <p>I'm a web developer from Oxfordshire. Scroll down to find out more 
                            about me, or to see some of the projects I'm most proud of. If you'd 
                            like to contact me, <a href="/contact/">click here</a>.
                        </p>
                        <div class={styles.buttonContainer}>
                            <button><a href='/about/'>About Me</a></button>
                            <button><a href='/contact/'>Contact</a></button>
                        </div>
                    </div>
                    <div className={styles.spacer} />
                </div>
            </div>
        </>
    )
}