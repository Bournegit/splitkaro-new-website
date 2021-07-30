import React from 'react'
import styles from './Intro.module.css'
import Navbar from '../Navbar/Navbar'
import Typical from 'react-typical'
import Carouselm from '../Carousel/Carousel'
import Footer from '../Footer/Footer'

function Intro() {
    return (
        <div className={styles.overcover}>
            <Navbar />
            <div className={styles.cover}>
                <div className={styles.content}>
                    <div class={styles.intro}>
                        <p>Split your bills with</p>
                        <Typical
                            steps={['S', 100, 'Sp', 100, 'Spl', 100, 'Spli', 100, 'Split', 800, 'SplitKaro', 4000]}
                            loop={Infinity}
                            wrapper="h2"
                        />
                        <h3>Introducing the quickest & fairest way to Split & Settle group expenses.<br></br></h3>
                    </div>
                    <div class={styles.intro_sec}>
                        <p>Get it here!</p>
                        <button class={styles.button1}><i class="fab fa-google-play fa-lg"></i> Play Store</button>
                        <button class={styles.button2}><i class="fab fa-app-store-ios fa-lg"></i> Apple Store</button>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.img} src="sk.png"></img>
                </div>


            </div>
        </div>
    )
}

export default Intro
