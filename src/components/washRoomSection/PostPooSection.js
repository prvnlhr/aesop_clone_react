import React from 'react'
import styles from "./styles/postPooSectionStyles.module.css"
import { Icon } from '@iconify/react';
import bannerImg from "../../assets/images/postPoo.png"
const PostPooSection = () => {

    const LinkBtn = () => {
        return (
            <div className={styles.btnWrapper} >
                <div className={styles.btnTextCell} >
                    <p>Discover Post-Poo Drops</p>

                </div>
                <div className={styles.btnIconCell} >
                    <Icon className={styles.btnIcon} icon="icons8:up-arrow" rotate={1} />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.postPooSectionWrapper}>

            <div className={styles.postPooSectionInnerWrapper} >

                <div className={styles.imageCell}>
                    <img src={bannerImg} />
                </div>
                <div className={styles.contentCell}>
                    <div className={styles.contentInnerCell} >
                        <div className={styles.headingCell} >
                            <p>
                                Post-Poo Drops has returned</p>
                        </div>
                        <div className={styles.contentTextCell} >
                            <p>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</p>
                        </div>
                        <div className={styles.buttonCell} >
                            <LinkBtn />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostPooSection