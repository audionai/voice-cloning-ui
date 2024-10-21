import Links from "./links/Links";
// import Button from "./next/button";
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
<svg width="51px"  className={styles.mava_logo} height="55.207794px" viewBox="0 0 51 55.207794">
  <g id="Group">
    <path d="M16.0905 6C6.66434 9.74439 0 18.9478 0 29.7078C0 43.791 11.4167 55.2078 25.5 55.2078C39.5833 55.2078 51 43.791 51 29.7078C51 18.9478 44.3357 9.74439 34.9095 6C34.9691 6.3939 35 6.79722 35 7.20778L35 16.2147C39.2347 19.2016 42.0006 24.1317 42.0006 29.7078C42.0006 38.8208 34.613 46.2084 25.5 46.2084C16.387 46.2084 8.99943 38.8208 8.99943 29.7078C8.99943 24.1317 11.7653 19.2016 16 16.2147L16 7.20778C16 6.79722 16.0309 6.3939 16.0905 6Z" id="Oval-Subtract" fill="rgb(var(--color))" fill-rule="evenodd" stroke="none" />
    <path d="M25.5 3.35276e-08C27.9856 5.20469e-08 30 2.01438 30 4.5L30 25.5C30 27.9856 27.9856 30 25.5 30L25.5 30C23.0144 30 21 27.9856 21 25.5L21 4.5C21 2.01438 23.0144 1.50083e-08 25.5 3.35276e-08Z" id="Rectangle" fill="rgb(var(--color))" stroke="none" />
  </g>
</svg>
<svg width="96px" height="54px" fill="rgb(var(--color))" viewBox="0 0 76 34"><defs><filter filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" id="filter_1"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 128 0" /><feOffset dx="0" dy="2" /><feGaussianBlur stdDeviation="2" /><feColorMatrix type="matrix" values="0 0 0 0 0.39215687 0 0 0 0 0.39215687 0 0 0 0 0.39215687 0 0 0 0.49803922 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect0_dropShadow" /><feBlend mode="normal" in="SourceGraphic" in2="effect0_dropShadow" result="shape" /></filter></defs><g id="Mava" transform="translate(6 4)"><g transform="translate(0, 0.9)" id="Mava" /*filter="url(#filter_1)"*/><path d="M1.35 4.5L9.9 13.05L18.45 4.5L18.45 20.7L15.75 20.7L15.75 11.7L9.9 17.55L4.05 11.7L4.05 20.7L1.35 20.7L1.35 4.5ZM35.55 20.7L32.4 20.7L31.302 18L25.398 18L24.3 20.7L21.15 20.7L28.35 4.5L35.55 20.7ZM26.514 15.3L30.186 15.3L28.35 10.8L26.514 15.3ZM49.05 4.5L45.9 4.5L41.85 14.4L37.8 4.5L34.65 4.5L41.85 20.7L49.05 4.5ZM62.55 20.7L59.4 20.7L58.302 18L52.398 18L51.3 20.7L48.15 20.7L55.35 4.5L62.55 20.7ZM53.514 15.3L57.186 15.3L55.35 10.8L53.514 15.3Z" /></g></g></svg>
            </div>
            <div className={styles.links_h}>
                <Links/>
            </div>
            <div className={styles.button_h}>
                {/* <Button>Sign up</Button> */}
                {/* <Button>Log in</Button> */}
                <button className={styles.login_bt}><a href="/login">Login</a></button>
                <button className={styles.signup_bt}><a href="/signup">Signup</a></button>
            </div> 
        </div>
    )
}

export default Navbar