/**
 * Created By: Ryan C. Wethey 
 * Date of Last Edit: 4/27/21
 * Reason For Edit: Creation of simple Web facing application 
 */

//imports 
import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'

//file imports
import styles from '../styles/Home.module.css'
import Calculator from '../functionality/Calculator/index';

export default function Home() {
  //create ref to not rerun onChange
  const textInput = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [answer, setAnswer] = useState<number | string>()

  const submitForm = event => {
    event.preventDefault();
    setSubmitted(true)
    setAnswer(Calculator(textInput.current.value));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Vid Mob Calculator</title>
      </Head>

      <div className={styles.logoContainer}>
        <Image src="/vidmob.svg" height={50} width={200} />
        <p className={styles.funnyCaption}>... calculator?</p>
      </div>

      <main className={styles.main}>
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Type Expression" className={styles.input} ref={textInput} required onFocus={() => { setSubmitted(false); console.log('change') }} />
          <button type="submit" className={styles.submit}>Submit</button>
        </form>
        {submitted && <p className={styles.answer}>Answer: {answer}</p>}
      </main>
    </div>
  )
}

