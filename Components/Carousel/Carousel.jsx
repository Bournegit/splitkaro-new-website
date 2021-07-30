import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Carousel.module.css'

function Carouselm() {
    return (
        <div>
            <Carousel autoPlay={true} stopOnHover={false} centerMode={true} centerSlidePercentage={100} showThumbs={false} showIndicators={false} emulateTouch={false} infiniteLoop={true} interval={5500} showArrows={false} showStatus={false} showIndicators={false}>
                <div>
                    <img src="sk.png" />
                    <h3 className={styles.heading}>Fetch online bills & split them fast & fair.</h3>
                    <p className={styles.legend}>Add online food deliveries & grocery accounts and split bills with friends item-wise.</p>
                </div>
                <div>
                    <img src="sk.png" />
                    <h3 className={styles.heading}>Want instant payment for your bill?<br></br>Create an instant bill.</h3>
                    <p className={styles.legend}>Now you get to decide which bills are urgent for you. Create instant group & non-group basis your requirements.</p>
                </div>
                <div>
                    <img src="sk.png" />
                    <h3 className={styles.heading}>Adding bills is now faster & easier than ever.</h3>
                    <p className={styles.legend}>From a CLUB with friends you split bills more often & in different groups.</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carouselm


