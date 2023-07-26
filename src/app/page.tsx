import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>A better way to practice binary questions.</h1>
      <Link href="/questions"><button>Start now</button></Link>
    </main>
  )
}
