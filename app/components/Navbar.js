import styles from './styles/Navbar.module.css';

export default function Navbar() {
    return (
        <>
            <div id="navbar" className="p-6 min-w-full max-h-28 flex justify-around items-center">
                    <img className="logo" src="/logo-test.png" alt="Jamie Thomas" style={{"max-width": "10%"}} />
                    <ul id="links" className="flex justify-around space-x-10">
                        <li className={styles.selected}>Home</li>
                        <li><a href='/about/'>About</a></li>
                        <li><a href='/projects/'>Projects</a></li>
                        <li><a href='/blog/'>Blog</a></li>
                    </ul>
                </div>
        </>
    )
}