"use client"
import { useRouter } from 'next/navigation';
import styles from "./api.module.css"
const Api = () => {
    const router = useRouter();

    const handleClick = () => {
      // Go back to the previous page
      router.back();
    };
    return (
        <main>
            <button onClick={handleClick} className="go_back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="rgb(var(--black))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <p className={styles.api_main}>API</p>
        </main>
    )
}

export default Api     