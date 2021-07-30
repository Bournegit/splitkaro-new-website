import React, { CSSProperties } from 'react'
import styles from './page1.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Page1() {

    

    return (
        <div>
            <div className={styles.overcover}>
                <div className={styles.cover}>
                    <Carousel autoPlay={true} stopOnHover={false} centerMode={true} centerSlidePercentage={100} showThumbs={false} showIndicators={true} emulateTouch={false} infiniteLoop={false} interval={6000} showArrows={true} showStatus={false} showIndicators={false}>
                        <div>
                            <img src="1.0.png" />
                        </div>
                        <div>
                            <img src="2.0.png" />
                        </div>
                    </Carousel>
                </div>
                <div className={styles.content}>
                    <h2>Fetch online bills & split them fast & fair.</h2>
                    <p>Add online food delivery & grocery accounts and split bills with friends item wise.</p>
                </div>
            </div>

            <div className={styles.overcover1}>
                <div className={styles.cover}>
                    <Carousel autoPlay={true} stopOnHover={false} centerMode={true} centerSlidePercentage={100} showThumbs={false} showIndicators={true} emulateTouch={false} infiniteLoop={false} interval={6000} showArrows={true} showStatus={false} showIndicators={false}>
                        <div>
                            <img src="3.0.png" />
                        </div>
                        <div>
                            <img src="4.0.png" />
                        </div>
                    </Carousel>
                </div>
                <div className={styles.content}>
                    <h2>Want instant payment for your bill?<br></br>Create an instant bill.</h2>
                    <p>Now you get to decide which bills are urgent for you. Create instant group and non-group/non-instant bills basis your requirements.</p>
                </div>
            </div>

            <div className={styles.overcover}>
                <div className={styles.cover}>
                    <Carousel autoPlay={true} stopOnHover={false} centerMode={true} centerSlidePercentage={100} showThumbs={false} showIndicators={true} emulateTouch={false} infiniteLoop={false} interval={6000} showArrows={true} showStatus={false} showIndicators={false}>
                        <div>
                            <img src="mob.png" />
                        </div>
                        <div>
                            <img src="mob.png" />
                        </div>
                        <div>
                            <img src="7.0.png" />
                        </div>
                        <div>
                            <img src="4.0.png" />
                        </div>
                        <div>
                            <img src="9.0.png" />
                        </div>
                        <div>
                            <img src="10.0.png" />
                        </div>
                    </Carousel>
                </div>
                <div className={styles.content}>
                    <h2>Adding bills is now faster & easier than ever.</h2>
                    <p>Form a <strong>CLUB</strong> with friends you split bills more often & in different groups.</p>
                    <p>Keep a <strong>COLLECTION</strong> of expenses for an event at one place. Add more bills to it at one go.</p>
                    <p>Create a <strong>GROUP</strong> with people you split expenses the most. Simplify debt records & settle the group later with minimum possible transactions.</p>
                </div>
            </div>

        </div>
    )
}

export default Page1
