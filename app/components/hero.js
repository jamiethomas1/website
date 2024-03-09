import styles from './styles/hero.module.css'

export default function Hero() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.welcome}>
                    <h1>Hi, I'm Jamie Thomas</h1>
                    <p>I'm a web developer from Oxfordshire. Scroll down to find out more 
                        about me, or to see some of the projects I'm most proud of. If you'd 
                        like to contact me, <a href="/contact/">click here</a>.
                    </p>
                </div>
                <div className={styles.picture}>
                    
                </div>
            </div>
        </>
    )
}