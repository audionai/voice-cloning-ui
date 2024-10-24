"use client"
import styles from "./myvoice.module.css"
import { useRouter } from 'next/navigation';

const Myvoice = () => {
    const router = useRouter();

    const handleClick = () => {
      // Go back to the previous page
      router.back();
    };
  
    return (
        <main className={styles.main_voice}>
            <button onClick={handleClick} className="go_back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="rgb(var(--black))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <p className={styles.train_voice}>Train Your Voice</p>
            <label className={styles.label}>
                <input type="file" id="model" className={styles.input_voice} accept="audio/*,audio/mp3,audio/wav,audio/aac"/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V14H18C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10H14V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V10L6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14L10 14V18Z" fill="rgb(var(--color))"/></svg>

            </label>
            <p className={styles.mp4_}>.mp3 only supported</p>
            <p className={styles.upload_voice}>ypu must upload your 3 - 6 audio file</p>
        </main>
    )
}

export default Myvoice     
