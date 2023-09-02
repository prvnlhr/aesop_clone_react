import React, { useRef } from 'react'
import styles from "./styles/skinSectionStyles.module.css";
import { Icon } from '@iconify/react';
import img1 from "../../assets/images/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png"
import img2 from "../../assets/images/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png"
import img3 from "../../assets/images/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.webp"
import img4 from "../../assets/images/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"
import img5 from "../../assets/images/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png"
import img6 from "../../assets/images/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png"
import img7 from "../../assets/images/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Large_684x668px.png"
import img8 from "../../assets/images/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png"

const SkinSection = () => {

    const carouselListRef = useRef(null);

    const thumbRef = useRef(null);

    const itemsCardRef = useRef(null);

    const itemsCardListRef = useRef(null);

    const itemsDatas = [
        {
            imageSrc: img1,
            imageLink: '',
            imageLinkText: 'Lucent Facial Contentrate',
            imageTitle: 'A Vitamin C- rich layering serum',
        },
        {
            imageSrc: img2,
            imageLink: '',
            imageLinkText: 'Purifying Facial Cream Cleanser',
            imageTitle: 'A dialy cream cleanser for dry skin',
        },
        {
            imageSrc: img3,
            imageLink: '',
            imageLinkText: 'Camellia Nut Facial Hydrating Cream',
            imageTitle: 'For normal, dry or sensitive skin',
        },
        {
            imageSrc: img4,
            imageLink: '',
            imageLinkText: 'Parsley Seed Anti-Oxidant Eye Cream',
            imageTitle: 'Nourishes delicate skin around eyes',
        },
        {
            imageSrc: img5,
            imageLink: '',
            imageLinkText: 'B triple C Facial Balancing Gel',
            imageTitle: 'Anti-oxidant gel infused with Vitamin B and C',
        },
        {
            imageSrc: img6,
            imageLink: '',
            imageLinkText: 'Mandrain Facial Hydrating Cream',
            imageTitle: 'Rapidly absorbed, lightly hydrating',
        },
        {
            imageSrc: img7,
            imageLink: '',
            imageLinkText: 'Parsley Seed Anti-OxidantIntense Serum',
            imageTitle: 'A hydrating serum to bolster skin',
        },
        {
            imageSrc: img8,
            imageLink: '',
            imageLinkText: 'Parsley Seed Facial Cleanser',
            imageTitle: 'For those in polluted urban environments',
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


        thumbRef.current.style.width = `${thumbWidth}px`;
        thumbRef.current.style.left = `${thumbPosition}px`;
        thumbRef.current.classList.add('active');


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
                                    <p>For the skin</p>
                                </div>
                                <div className={styles.secHeadingCell} >
                                    <p>Attention for all types</p>
                                </div>
                            </div>

                            <div className={styles.contentRightCell} >
                                <div className={styles.contentTextCell} >
                                    <p>The well-being of your skin is the product of
                                        hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.
                                    </p>
                                </div>

                                <div className={styles.contentLinkCell} >
                                    <div className={styles.linkBtnWrapper} >

                                        <div className={styles.linkBtnTextWrapper} >
                                            <p>See all Skin Care</p>
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

export default SkinSection