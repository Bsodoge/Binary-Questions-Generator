import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Binary Question Generator</h1>
      <h2>A better way to practice binary questions.</h2>
      <Link href="/questions"><button>Start now</button></Link>
    </main>
  )
}
