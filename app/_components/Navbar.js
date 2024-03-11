import styles from './styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <div id="navbar" className="p-6 min-w-full max-h-28 flex justify-around items-center">
                    <img className="logo" src="/logo-test.png" alt="Jamie Thomas" style={{"max-width": "10%"}} />
                    <ul id="links" className="flex justify-around space-x-10">
                        <li className={styles.selected}><Link href="/">Home</Link></li>
                        <li><Link href='/about/'>About</Link></li>
                        <li><Link href='/projects/'>Projects</Link></li>
                        <li><Link href='/blog/'>Blog</Link></li>
                    </ul>
                </div>
        </>
    )
}

/**
 * TODO: Add script to determine which navbar link to underline
 */