
"use client"
import { useEffect, useRef, useState } from 'react';
import styles from "./page/page.module.css";
import Faq from "./Faq/page"
import AudioPlayer from '@/components/AudioPlayer'
import Imageview from '@/components/imagelist/page';
import Country from '@/components/country/page';
import { useRouter } from 'next/navigation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
        const [showScrollToTop, setShowScrollToTop] = useState(false);
      // const { locale } = useRouter();
      // const greetings = {
      //   en: 'he',
      //   fr: 'fr'
      // }
        const handleScroll = () => {
          const currentPosition = window.scrollY;
          if (currentPosition > 100) {
            setShowScrollToTop(true);
          } else {
            setShowScrollToTop(false);
          }
        };
      
        const handleButtonClick = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
  return (
        <main className={styles.main_pag}>
            <p className={styles.mava_txt}>
                    Create human-quality 
                    voices in seconds.
                    {/* {locale}
                    {greetings[locale]} */}
                </p><p className={styles.mava_txt_2}>Text-to-Speech that sounds neutral.</p>
                <p className={styles.mava_main_text}></p>
               <p className={styles.mava_nar}>
                Revolutionize your storytelling with captivating AI voices.
                Engage your audience with powerful
               </p>
               <div className={styles.audio_player}>
               <AudioPlayer url="/mal.mp3"/>
               </div>
                <button className={styles.get_sta}>
                    <a href="/try">
                    Get start for free 
                    </a>
                    {/* <svg className={styles.arrow_right} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 12.5303C18.8232 12.2374 18.8232 11.7626 18.5303 11.4697L14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967C13.1768 7.76256 13.1768 8.23744 13.4697 8.53033L16.1893 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H16.1893L13.4697 15.4697C13.1768 15.7626 13.1768 16.2374 13.4697 16.5303C13.7626 16.8232 14.2374 16.8232 14.5303 16.5303L18.5303 12.5303Z" fill="rgb(var(--background))"/>
                    </svg> */}
               </button>
               <p className={styles.main_pa}>immerse yourself in the world of advanced voice yrchnologe. Our 
                AI voice generator delivers natural.human-like intonation and infection, adapting seamlessly
                to any context</p>
                <div className={styles.srvice_}>
                  <p className={styles.service_name}>Vioce Cloning</p>
                <p className={styles.service_description}>Capture the essence of any voice. Whether it’s for professional use or personal projects, our voice cloning technology ensures perfect replication, preserving the unique nuance of the original.</p>
                  <div className="clone_nemo">
                    
                    <div className="cone_voice">
                    <AudioPlayer url="/mal.mp3"/>
                    <div>---------</div>
                    <AudioPlayer url="/mal.mp3"/>
                    </div>
                    <div className="cone_voice">
                    <AudioPlayer url="/mal.mp3"/>
                    <div>---------</div>
                    <AudioPlayer url="/mal.mp3"/>
                    </div>
                    {/* <div className="cone_voice">
                    <AudioPlayer url="/mal.mp3"/>
                    <AudioPlayer url="/mal.mp3"/>
                    </div> */}
                    </div>
                </div>
                <div className={styles.srvice_}>
                  <p className={styles.service_name}>Voice Cutter</p>
                  <p className={styles.service_description}>Say goodbye to unwanted words, our voice cutter features allow you to seamlessly remove explicit or unwanted segments from your audio and replace them with custom sounds, ensuring your context remain clean and professional.</p>
                  <AudioPlayer url="/mal.mp3"/>
                </div>
                <div className={styles.srvice_}>
                  <p className={styles.service_name}>Voice Translation</p>
                  <p className={styles.service_description}>Break down language barriers. Translate your voice into multiple languages with impeccable accuracy and maintain the original tone </p>
                  <div className='voice_trans'>
                    <AudioPlayer url="/mal.mp3"/>
                    <div>---------</div>

                  <AudioPlayer url="/mal.mp3"/>
                    </div>
                </div>

               <div className={styles.srvice_}>
                <p className={styles.service_name}>My Voice</p>
                <p className={styles.service_description}>Make it personal. customize and fine-tune your unique voice model, ensuring your AI assistant or context, reflect your personality and style.</p>
                  <AudioPlayer url="/mal.mp3"/>
                </div>

                <div className={styles.srvice_} /**className={styles.srvice_} */>
                  <p className={styles.service_name}>And More</p>
                  <p className={styles.service_description}>Discover the full range of our voice capabilities. From dynamic speech synthesis to real-time audio processing, our comprehensive suite of tools is design to meet all your </p>
                  {/* <AudioPlayer url="/mal.mp3"/> */}
                  <a className='explore'>Explore our Product
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 12.5303C18.8232 12.2374 18.8232 11.7626 18.5303 11.4697L14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967C13.1768 7.76256 13.1768 8.23744 13.4697 8.53033L16.1893 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H16.1893L13.4697 15.4697C13.1768 15.7626 13.1768 16.2374 13.4697 16.5303C13.7626 16.8232 14.2374 16.8232 14.5303 16.5303L18.5303 12.5303Z" fill="rgb(var(--my-color))"/></svg></a>
                </div>

                      {/* <div className={styles.lang_container}>
                      <p className={styles.main_support_lang}>Supported Language</p>
                      <div className={styles.country}>
                        <Country/>
                        </div>
                      </div> */}



               <br />

               <div className={styles.main_voi}>

<p className={styles.what_voice}>Entertainemnt voice</p>
<Imageview />
<p className={styles.what_voice}>Kids voice</p>
{/* <p className={styles.what_voice}>Poscast voice</p> */}
<p className={styles.what_voice}>Chatbot voice</p>
{/* <p className={styles.what_voice}>Music voice</p> */}
<p className={styles.what_voice}>Gamming voice</p>
</div>



                {/* <p>What we offer</p>
               <p>Explore Out Technology</p>
               <p>Voice Cloning</p>
               <li></li> */}
               <br />
                 <Faq />
                 {/* <div className={styles.scroll_}> */}
      {/* {showScrollToTop && ( */}
        <button onClick={handleButtonClick} className={styles.scroll_}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5856 14.4685C17.3269 14.7919 16.8549 14.8444 16.5315 14.5856L12 10.9604L7.46849 14.5856C7.14505 14.8444 6.67308 14.7919 6.41432 14.4685C6.15556 14.145 6.208 13.6731 6.53145 13.4143L11.5315 9.41432C11.8054 9.19519 12.1946 9.19519 12.4685 9.41432L17.4685 13.4143C17.7919 13.6731 17.8444 14.145 17.5856 14.4685Z" fill="rgb(var(--background))"/>
</svg>

        </button>
    {/* //   )} */}
    {/* </div> */}

                </main>
    )
};