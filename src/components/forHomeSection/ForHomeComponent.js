import React, { useRef } from 'react'
import styles from "./styles/forHomeComponentStyles.module.css"
import { Icon } from '@iconify/react';

import img1 from "../../assets/images/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png"
import img2 from "../../assets/images/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png"
import img3 from "../../assets/images/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.png"
import img4 from "../../assets/images/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png"
import img5 from "../../assets/images/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png"
import img6 from "../../assets/images/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.png"
import img7 from "../../assets/images/Aesop_Home_Kagerou_Aromatique_Incense_Web_Large_1584x1384px.png"
import img8 from "../../assets/images/Aesop_Home_Sarashina_Aromatique_Incense_Web_Large_1584x1384px.png"

const ForHomeComponent = () => {

    const carouselListRef = useRef(null);

    const thumbRef = useRef(null);

    const itemsCardRef = useRef(null);

    const itemsCardListRef = useRef(null);


    const itemsDatas = [
        {
            imageSrc: img1,
            imageLink: '',
            imageLinkText: 'Post-Poo Drops',
            imageTitle: 'A botanical bathroom deodoriser',
        },
        {
            imageSrc: img2,
            imageLink: '',
            imageLinkText: 'Agnice Aromatique Candle',
            imageTitle: 'Cardamom, Mimosa, Tabacco',
        },
        {
            imageSrc: img3,
            imageLink: '',
            imageLinkText: 'Ptolemy Aromatique Candle',
            imageTitle: 'A sensuous blend of leather, smoke and wood',
        },
        {
            imageSrc: img4,
            imageLink: '',
            imageLinkText: 'Callippis Aromatique Candle',
            imageTitle: 'A marriage of deep greens and earth spices',
        },
        {
            imageSrc: img5,
            imageLink: '',
            imageLinkText: 'Bronze Incense Holder',
            imageTitle: 'Suited to any interior',
        },
        {
            imageSrc: img6,
            imageLink: '',
            imageLinkText: 'Murasaki Aromatique Incense',
            imageTitle: 'For those whose favour aromas of warm spice',
        },
        {
            imageSrc: img7,
            imageLink: '',
            imageLinkText: 'Kagerou Aromatique Incense',
            imageTitle: 'For those particularly partial to Vetiver',
        },
        {
            imageSrc: img8,
            imageLink: '',
            imageLinkText: 'Sarashina Aromatique Incense',
            imageTitle: 'For those particularly partial to Sandalwood',
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
                                    <p>For the home</p>
                                </div>
                                <div className={styles.secHeadingCell} >
                                    <p>Domestic pleasures</p>
                                </div>
                            </div>

                            <div className={styles.contentRightCell} >
                                <div className={styles.contentTextCell} >
                                    <p>Our range of aromatic formulations for the home are practical and pleasing in equal measure.
                                    </p>
                                </div>

                                <div className={styles.contentLinkCell} >
                                    <div className={styles.linkBtnWrapper} >

                                        <div className={styles.linkBtnTextWrapper} >
                                            <p>See all Home</p>
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

export default ForHomeComponent