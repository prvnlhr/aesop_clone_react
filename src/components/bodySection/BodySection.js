import React, { useRef } from 'react'
import styles from "./styles/bodySectionStyles.module.css"
import { Icon } from '@iconify/react';

import img1 from "../../assets/images/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png"
import img2 from "../../assets/images/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png"
import img3 from "../../assets/images/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png"

const BodySection = () => {

    const carouselListRef = useRef(null);

    const thumbRef = useRef(null);

    const itemsCardRef = useRef(null);

    const itemsCardListRef = useRef(null);

    const itemsDatas = [
        {
            imageSrc: img1,
            imageLink: '',
            imageLinkText: 'Nurture Bar Soap',
            imageTitle: 'Offers a mild yet effective cleanse',
        },
        {
            imageSrc: img2,
            imageLink: '',
            imageLinkText: 'Polish Bar Soap',
            imageTitle: 'Thorough cleanse and exfoliates skin',
        },
        {
            imageSrc: img3,
            imageLink: '',
            imageLinkText: 'Refresh Bar Soap',
            imageTitle: 'Offer a thorough and enlivening cleanse',
        },

    ]

    const handleScroll = (direction) => {
        if (carouselListRef.current && thumbRef.current) {
            const scrollAmount = 400 * direction;
            carouselListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        const contentScrollLeft = carouselListRef.current.scrollLeft;
        const contentWidth = carouselListRef.current.scrollWidth;
        const containerWidth = carouselListRef.current.clientWidth;
        const visibleContentRatio = containerWidth / contentWidth;
        const trackWidth = containerWidth - (containerWidth * visibleContentRatio);
        const thumbWidth = containerWidth * visibleContentRatio;
        const thumbPosition = (contentScrollLeft / (contentWidth - containerWidth)) * trackWidth;

        // Update thumb width and position
        thumbRef.current.style.width = `${thumbWidth}px`;
        thumbRef.current.style.left = `${thumbPosition}px`;
        thumbRef.current.classList.add('active');

        // Remove active class after a short delay
        setTimeout(() => {
            thumbRef.current.classList.remove('active');
        }, 300);
    };

    const itemsListScroll = (direction) => {
        if (itemsCardRef.current) {
            itemsCardListRef.current.scrollBy({ left: itemsCardRef.current.offsetWidth * direction, behavior: 'smooth' });
        }
    }

    return (
        <div className={styles.componentWrapper} >
            <div className={styles.componentInnerWrapper}>
                <div className={styles.scrollBtnWrapperLeft} onClick={() => handleScroll(-1)} >
                    <div className={styles.scrollIconDiv} >
                        <Icon className={styles.scrollIcon} icon="carbon:chevron-right" color='white' rotate={2} />
                    </div>
                </div>
                <div className={styles.scrollBtnWrapperRight} onClick={() => handleScroll(1)} >
                    <div className={styles.scrollIconDiv} >
                        <Icon className={styles.scrollIcon} icon="carbon:chevron-right" color='white' rotate={0} />
                    </div>
                </div>

                <div className={styles.outerScrollListWrapper} ref={carouselListRef} >

                    <div className={styles.contentCardWrapper} >
                        <div className={styles.contentCardInnerWrapper} >

                            <div className={styles.contentLeftCell} >
                                <div className={styles.headingCell} >
                                    <p>For the body</p>
                                </div>
                                <div className={styles.secHeadingCell} >
                                    <p>An expression of care</p>
                                </div>
                            </div>

                            <div className={styles.contentRightCell} >
                                <div className={styles.contentTextCell} >
                                    <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.
                                    </p>
                                </div>

                                <div className={styles.contentLinkCell} >
                                    <div className={styles.linkBtnWrapper} >

                                        <div className={styles.linkBtnTextWrapper} >
                                            <p>See all Body Care</p>
                                        </div>
                                        <div className={styles.linkBtnIconWrapper} >
                                            <Icon className={styles.btnIcon} icon="icons8:up-arrow" rotate={1} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className={styles.itemsCardListWrapper}>
                        <div className={styles.itemsScrollBtnWrapperLeft} onClick={() => itemsListScroll(-1)} >
                            <div className={styles.scrollIconDiv} >
                                <Icon className={styles.scrollIcon} icon="carbon:chevron-right" color='white' rotate={2} />
                            </div>
                        </div>
                        <div className={styles.itemsScrollBtnWrapperRight} onClick={() => itemsListScroll(1)} >
                            <div className={styles.scrollIconDiv} >
                                <Icon className={styles.scrollIcon} icon="carbon:chevron-right" color='white' rotate={0} />
                            </div>
                        </div>

                        <div className={styles.itemsCardListInnerWrapper} ref={itemsCardListRef}>

                            {
                                itemsDatas.map((item, index) => (
                                    <>
                                        <div className={styles.itemCardWrapper} key={index} ref={itemsCardRef}>
                                            <div className={styles.imageWrapper} >
                                                <img src={item.imageSrc} />
                                            </div>
                                            <div className={styles.imageLinkWrapper} >
                                                <p>{item.imageLinkText}</p>
                                            </div>
                                            <div className={styles.imageTitleWrapper} >
                                                <p>{item.imageTitle}</p>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.scrollBarWrapper} >
                <div className={styles.scrollBarTrack} >
                    <div className={styles.scrollBarThumb} ref={thumbRef} ></div>
                </div>
            </div>
        </div>
    )
}

export default BodySection