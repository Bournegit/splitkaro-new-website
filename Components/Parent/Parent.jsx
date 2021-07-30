import React from 'react'
import styles from './Parent.module.css'
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Page1 from '../Content/page1'

function Parent() {

   
    return (
        <div className={styles.parent}>
        <Intro />
        <Page1 />
        <Footer />
        </div>
    )
}

export default Parent
