import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.upper}>
                <div className={styles.social1}>
                    <ul className={styles.social}>
                        <li><i class="fab fa-facebook-square fa-2x"></i></li>
                        <li><i class="fab fa-instagram-square fa-2x"></i></li>
                        <li><i class="fab fa-twitter-square fa-2x"></i></li>
                    </ul>
                </div>
            </div>
            <div className={styles.lower}>
        
            </div>
        </div>
    )
}

export default Footer
