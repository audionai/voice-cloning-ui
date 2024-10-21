"use client"
import { useRouter } from 'next/navigation';
import styles from "./try.module.css";
import LanguageDropdowncustom from "./LanguageDropdowncustom/languageDropdown";
import CharacterDropdown from "./characterDropdown/CharacterDropdown";
import TextareaCounter from "./textareaCounter"
const Try = () => {
    const router = useRouter();

    const handleClick = () => {
      // Go back to the previous page
      router.back();
    };
    return (
        <main className={styles.main_cont}>
                        <button onClick={handleClick} className="go_back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="rgb(var(--color))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
            <p className={styles.main_p}>Mava TTS</p>
            <a href='try/make.html'>make audio read llama3 new</a>
            {/* <textarea name="" id="" className={styles.textarea_try}>
            </textarea> */}
                <TextareaCounter/>
            <div className={styles.menu_dropdown}>
                <LanguageDropdowncustom/>
                <CharacterDropdown/>
                <div className={styles.play_btn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16.9611 13.7365L8.99228 18.2901C7.65896 19.052 6 18.0893 6 16.5536V12V7.44636C6 5.91071 7.65896 4.94798 8.99228 5.70987L16.9611 10.2635C18.3048 11.0313 18.3048 12.9687 16.9611 13.7365Z" fill="rgb(var(--white))"/>
                </svg>
                </div>

            </div>

        </main>
    )
}

export default Try     