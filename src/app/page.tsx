import MatrixEffect from './components/MatrixEffect'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.text_container}>
        <h1>Binary Question Generator</h1>
        <div className={styles.information_container}>
          <p>The best way to practice binary related questions for GCSE Computer Science, A Level Computer Science and beyond.</p>
          <div className={styles.question_types_container}>
            <p>Practice many types of binary questions including:</p>
            <ul>
              <li>Decimal to Binary conversions</li>
              <li>Hex to Binary conversions</li>
              <li>Binary Addition</li>
              <li>Binary Subtraction</li>
              <li>Binary Multiplication</li>
              <li>Binary Fractions</li>
              <li>Two&apos;s Compliment Conversions</li>
              <li>Binary Mantissa and Exponent Questions</li>
            </ul> 
          </div>
        </div>
        <Link href="/questions" title="Start generating binary questions now!"><button>Start now</button></Link>
      </div>
      <MatrixEffect/>
    </main>
  )
}
