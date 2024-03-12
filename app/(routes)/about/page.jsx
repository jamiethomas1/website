import BaseLayout from "@/app/_layouts/BaseLayout";
import styles from "./styles/About.module.css";

export default function About() {
    return (
        <BaseLayout>
            <div className={styles.background} />
            <p>About</p>
        </BaseLayout>
    )
}