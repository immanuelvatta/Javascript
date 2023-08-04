import React from 'react'
import styles from './Main.module.css'
import SubContents from './SubContents.js'
import Advertisement from './Advertisement'

const Main = () => {
    return (
        <div className={styles.main}>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </div>
    )
}

export default Main