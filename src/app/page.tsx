import MatrixEffect from './components/MatrixEffect'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.text_container}>
        <h1>Binary Question Generator</h1>
        <p>The best way to practice binary related questions for GCSE Computer Science, A Level Computer Science and beyond.</p>
        <Link href="/questions" title="Start generating binary questions now!"><button>Start now</button></Link>
      </div>
      <MatrixEffect/>
    </main>
  )
}
