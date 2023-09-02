import React from 'react'
import styles from "./styles/athenaSectionStyles.module.css"
import { Icon } from '@iconify/react';
import bannerImg from "../../assets/images/asset 26.jpeg"
const AthenaeumSection = () => {


    const LinkBtn = () => {
        return (
            <div className={styles.btnWrapper} >
                <div className={styles.btnTextCell} >
                    <p>Read more</p>

                </div>
                <div className={styles.btnIconCell} >
                    <Icon className={styles.btnIcon} icon="icons8:up-arrow" rotate={1} />
                </div>
            </div>
        )
    }




    return (
        <div className={styles.athenaSectionWrapper}>

            <div className={styles.athenaSectionInnerWrapper} >

                <div className={styles.contentCell}>
                    <div className={styles.contentInnerCell} >
                        <div className={styles.headingCell} >
                            <p>The Athenaeum</p>
                        </div>
                        <div className={styles.secHeadingCell} >
                            <p>The warm-up</p>
                        </div>
                        <div className={styles.contentTextCell} >
                            <p>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
                        </div>
                        <div className={styles.buttonCell} >
                            <LinkBtn />
                        </div>
                    </div>
                </div>
                <div className={styles.imageCell}>
                    <img src={bannerImg} />
                </div>
            </div>
        </div>
    )
}

export default AthenaeumSection