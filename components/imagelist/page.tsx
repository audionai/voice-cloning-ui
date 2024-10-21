import Image from "next/image";
import styles from "./imagelist.module.css"
import AudioPlayer from '@/components/AudioPlayer'

const Imageview = () => {
    return (
        <div className={styles.list}>
        <div className="list_image">
            <div className={styles.img_c}>
                <Image 
                src="/img_1.jpg"
                width={135}
                height={135}
                alt="image"
                />
                <AudioPlayer url="/audio1.mp3"/>
                {/* <p>Music voice</p> */}
            </div>
            <div className={styles.img_c}>
                <Image 
                src="/img_2.jpg"
                width={135}
                height={135}
                alt="image"
                />
                <AudioPlayer url="/audio1.mp3"/>
                {/* <p>Music voice</p> */}
            </div>
            <div className={styles.img_c}>
                <Image 
                src="/img_3.jpg"
                width={135}
                height={135}
                alt="image"
                />
                <AudioPlayer url="/audio1.mp3"/>
                {/* <p>Music voice</p> */}
            </div>
            <div className={styles.img_c}>
                <Image 
                src="/img_4.jpg"
                width={135}
                height={135}
                alt="image"
                />
                <AudioPlayer url="/audio1.mp3"/>
                {/* <p>Music voice</p> */}
            </div>
            <div className={styles.img_c}>
                <Image 
                src="/img_5.jpg"
                width={135}
                height={135}
                alt="image"
                />
                <AudioPlayer url="/audio1.mp3"/>
                {/* <p>Music voice</p> */}
            </div>
            <div className={styles.img_c}>
                <Image 
                src="/img_6.jpg"
                width={135}
                height={135}
                alt="image"
                />
                <AudioPlayer url="/audio1.mp3"/>
                {/* <p>Music voice</p> */}
            </div>
        </div>
        </div>
    )
} 

export default Imageview