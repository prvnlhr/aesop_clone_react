import React, { useRef, useState } from 'react'
import styles from "./styles/storeSectionStyles.module.css"
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import img1 from "../../assets/images/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg"
import img2 from "../../assets/images/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
import img3 from "../../assets/images/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg";
import SimpleImageSlider from "react-simple-image-slider";
const variants = {
    slide: (direction) => ({
        x: direction > 0 ? '-100%' : '100%',
    }),
};


const StoreSection = () => {

    const sliderRef = useRef(null);


    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
    ]



    const LinkBtn = () => {
        return (
            <div className={styles.btnWrapper} >
                <div className={styles.btnTextCell} >
                    <p>Find a nearby store</p>

                </div>
                <div className={styles.btnIconCell} >
                    <Icon className={styles.btnIcon} icon="icons8:up-arrow" rotate={1} />
                </div>
            </div>
        )
    }
    const [curr, setCurr] = useState(0)

    const handlePrevSlide = () => {
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1))
    };

    const handleNextSlide = () => {
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))
    };


    return (
        <div className={styles.storeLocationSectionWrapper} >
            <div className={styles.storeLocationSectionInnerWrapper} >

                <div className={styles.contentCell} >
                    <div className={styles.contentInnerCell}  >
                        <div className={styles.headingCell} >
                            <p>Store locator</p>
                        </div>
                        <div className={styles.contentTextCell} >
                            <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                        </div>
                        <div className={styles.buttonCell} >
                            <LinkBtn />
                        </div>
                    </div>
                </div>




                <div className={styles.imageCell}>
                    <div className={styles.imageCellInnerWrapper} >

                        <div className={styles.imgScrollListWrapper} >
                            <div className={styles.scrollBtnWrapperLeft} onClick={handlePrevSlide}>
                                <div className={styles.scrollIconDiv}>
                                    <Icon className={styles.scrollIcon} icon="carbon:chevron-right" color="white" rotate={2} />
                                </div>
                            </div>
                            <div className={styles.scrollBtnWrapperRight} onClick={handleNextSlide}>
                                <div className={styles.scrollIconDiv}>
                                    <Icon className={styles.scrollIcon} icon="carbon:chevron-right" color="white" rotate={0} />
                                </div>
                            </div>
                            <div className={styles.imgScrollListInnerWrapper} >
                                {images.map((item) => (
                                    <div className={styles.imageWrapper}>
                                        <img src={item.url} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.imgScrollTrackWrapper} >
                            <div className={styles.scrollBarTrack} >
                                <div className={styles.scrollBarThumb} ></div>
                            </div>
                        </div>

                        <div className={styles.imgNameWrapper} >
                            <p>Aesop MOKO</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreSection