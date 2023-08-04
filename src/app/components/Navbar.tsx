import Link from "next/link"
import Image from "next/image"
import styles from "./navbar.module.css"
import githubIcon from "../../../public/github-mark-white.svg"

export default function Navbar() {
    return(
        <header className={styles.header}>
            <Link href="/"><div className={styles.logo}>BQG</div></Link>
            <Link href="https://github.com/Bsodoge/Binary-Questions-Generator"><Image src={githubIcon.src} alt="Github" width={40} height={40}/></Link>
        </header>
    )
}