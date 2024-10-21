"use client"
import { useRouter } from 'next/navigation';
import styles from "./signup.module.css"

const Login = () => {
    const router = useRouter();

    const handleClick = () => {
      // Go back to the previous page
      router.back();
    };
    return (
        <main className={styles.login_main}>
            <button onClick={handleClick} className="go_back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="rgb(var(--black))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <p className={styles.login_p}>Please Signup</p>
            <div className={styles.email_log}>


            <input type="email" name="" id="" placeholder="Name" className={styles.input_email}/>
            <input type="email" name="" id="" placeholder="Email" className={styles.input_email}/>
            <div className={styles.input_emai}>
            <input type="password" name="" id="" placeholder="Password" className={styles.input_email}/>
            </div>
            <div className={styles.check_login}>
                <input type="checkbox" name="" id="" />
                Agree to <a href="">Terms and Conditions</a> & <a href="">Privacy Policy</a>
            </div>
            <input type="submit" value="Sign up" className={styles.login_btn_in}/>
            <p className={styles.or_}>Or sign up with an email</p>
            </div>
            <div className={styles.social_login_container}>

            <button className={styles.login_btn}>
            <svg enable-background="new 0 0 56.693 56.693" fill='rgb(var(--black))' height="25px" viewBox="0 0 56.693 56.693" width="25px"><g><path d="M41.777,30.517c-0.062-6.232,5.082-9.221,5.312-9.372c-2.891-4.227-7.395-4.807-8.998-4.873   c-3.83-0.389-7.477,2.256-9.42,2.256c-1.939,0-4.941-2.199-8.117-2.143c-4.178,0.062-8.029,2.43-10.179,6.17   c-4.339,7.527-1.11,18.682,3.118,24.791c2.067,2.986,4.532,6.346,7.766,6.223c3.117-0.123,4.293-2.016,8.061-2.016   s4.826,2.016,8.123,1.953c3.352-0.061,5.477-3.043,7.527-6.041c2.373-3.469,3.35-6.828,3.408-6.998   C48.305,40.433,41.844,37.958,41.777,30.517z"/><path d="M35.582,12.229c1.715-2.082,2.877-4.975,2.561-7.855c-2.475,0.1-5.471,1.645-7.248,3.725   c-1.592,1.846-2.984,4.785-2.611,7.613C31.045,15.926,33.861,14.307,35.582,12.229z"/></g></svg>
            <p>Continue with Apple</p>
            </button>
            <button className={styles.login_btn}>
            <svg enable-background="new 0 0 512 512" height="25px" viewBox="0 0 512 512" width="25px"><path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456  C103.821,274.792,107.225,292.797,113.47,309.408z" fill="#FBBB00"/><path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" fill="#518EF8"/><path d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512  c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771  c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" fill="#28B446"/><path d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012  c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0  C318.115,0,375.068,22.126,419.404,58.936z" fill="#F14336"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
            <p>Continue with google</p>
            </button>
            <button className={styles.login_btn}>
                <svg height="25px" enable-background="new 0 0 512 512" fill="rgb(var(--black))" viewBox="0 0 512 512" width="25px" ><g id="_x37_8-microsoft"><g><g><path d="M270.912,241.049h223.691V31.708c0-8.26-6.68-14.958-14.914-14.958H270.912V241.049z      M270.912,241.049" fill="#5ACF5F;"/><path d="M241.09,241.049V16.75H32.313c-8.236,0-14.916,6.698-14.916,14.958v209.341H241.09z      M241.09,241.049" fill="#F84437;"/><path d="M241.09,270.953H17.397v209.343c0,8.251,6.68,14.954,14.916,14.954H241.09V270.953z      M241.09,270.953" fill="#2299F8;"/><path d="M270.912,270.953V495.25h208.777c8.234,0,14.914-6.703,14.914-14.954V270.953H270.912z      M270.912,270.953" fill="#FFC107;"/></g></g></g><g id="Layer_1"/></svg>
                <p>Continue with microsoft</p>
            </button>
            </div>
        </main>
    )
}

export default Login