import BaseLayout from "@/app/_layouts/BaseLayout";
import styles from "./styles/About.module.css";

export default function About() {
    return (
        <BaseLayout>
            <div className={styles.background} />
            <div className={styles.about}>
                <h2 className={"font-bold text-5xl "}>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo enim, accumsan nec 
                    turpis euismod, tristique malesuada arcu. Quisque id egestas est. Suspendisse vel tempus 
                    tortor. Cras libero metus, tempor in dolor ac, scelerisque rutrum dui. Aenean eleifend 
                    aliquet arcu, sit amet facilisis erat viverra ac. Quisque lobortis sem eget nisl 
                    fermentum fermentum. Phasellus imperdiet mi dapibus nisl iaculis commodo. Nulla maximus 
                    sapien ac ex varius suscipit. Proin tempor urna sit amet quam tempor, eu sodales elit 
                    euismod.
                </p>
                <p>
                    Nulla eget tempus ante. Etiam et risus et diam consectetur facilisis quis at tellus. Sed 
                    nec sollicitudin nunc, id vulputate tellus. Mauris hendrerit metus dolor, vel ultricies 
                    tellus bibendum a. Curabitur ut lobortis eros. Suspendisse ut orci rutrum, ultrices arcu 
                    eget, elementum odio. Sed dignissim, justo ut imperdiet consequat, tellus nisi varius 
                    tellus, posuere volutpat libero libero non sapien. Etiam accumsan urna ipsum, at pretium 
                    neque accumsan ac. Aliquam erat volutpat. Vestibulum mollis nisi mi. Vestibulum ultricies 
                    lectus quis accumsan molestie. Integer id mauris id dolor tempor mollis et quis turpis. 
                    Duis viverra libero pellentesque placerat malesuada. Interdum et malesuada fames ac ante 
                    ipsum primis in faucibus.
                </p>
            </div>
        </BaseLayout>
    )
}