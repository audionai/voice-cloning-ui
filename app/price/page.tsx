"use client"
import { useRouter } from 'next/navigation';
import styles from "./price.module.css"

const Price = () => {
    const router = useRouter();

    const handleClick = () => {
      // Go back to the previous page
      router.back();
    };
    return (
        <main>
            <p className={styles.main_price}>Price</p>
                        <button onClick={handleClick} className="go_back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="rgb(var(--black))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
            <div className={styles.pricing_card_cont}>
                <div className={styles.pricing_card}>
                    <div className={styles.card_name}>Free
                    </div>
                    <p className={styles.card_price}>
                        <span>$0</span>
                    </p>
                    <p className={styles.price_per}>price per month</p>
                    <button className={styles.getstart_btn}>
                        <a href="/try">
                        Get start free
                        </a>
                        </button>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div className={styles.pricing_card}>
                    <div className={styles.card_name}>Plus

                    <p className={styles.card_offer}>20% OFF</p>
                    </div>
                    <p className={styles.card_price}>
                        <span>$39.99</span>/ month
                    </p>
                    <p className={styles.price_per}>price / month</p>
                    <button className={styles.getstart_btn}>Get started</button>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div className={styles.pricing_card}>
                    <div className={styles.card_name}>Pro

                    <p className={styles.card_offer}>20% OFF</p>
                    </div>
                    <p className={styles.card_price}>
                        <span>$99.99</span>/ month
                    </p>
                    <p className={styles.price_per}>price / month</p>
                    <button className={styles.getstart_btn}>Get start</button>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div className={styles.pricing_card}>
                    <div className={styles.card_name}>Enterprice</div>
                    <p className={styles.card_price}>
                    Customizable
                     {/* capability */}
                    <span></span>
                    </p>
                    <p className={styles.price_per}>
                    Customizable capability</p>
                    <button className={styles.getstart_btn}>Contact sales</button>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            Price


free
simple way to get started


            Enterprise
            Customizable capability
            Contact sales
            Everything in professional
  
        </main>
    )
}

export default Price     