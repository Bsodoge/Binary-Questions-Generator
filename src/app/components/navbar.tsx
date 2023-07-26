import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar() {
    return(
        <header className={styles.header}>
            <Link href="/"><div className={styles.logo}>BQG</div></Link>
            <Link href="https://github.com/Bsodoge/Binary-Questions-Generator"><img src="" alt="Github" className="github" /></Link>
        </header>
    )
}