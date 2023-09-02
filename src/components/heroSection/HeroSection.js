import React, { useRef } from 'react'
import styles from "./styles/heroSectionStyles.module.css"
import bannerImg from "../../assets/images/bannerMobile.jpg"
import { Icon } from '@iconify/react';

const HeroSection = ({ isNavBarFixed, navBarOutOfView, navBarRef }) => {

    const LinkBtn = () => {
        return (
            <div className={styles.btnContainer} >
                <div className={styles.btnTextCell} >
                    <p>Discover Bar Soaps</p>
                </div>
                <div className={styles.btnIconCell} >
                    <Icon className={styles.btnIcon} icon="icons8:up-arrow" rotate={1} />
                </div>
            </div>
        )
    }

    // const GlobalNav = ({ navBarRef }) => {
    //     return (
    //         <div className={`${styles.globalNavWrapper} ${navBarOutOfView && styles.globalNavWrapperFixed} `} ref={navBarRef}>

    //             <div className={styles.leftNavOptionsList} >

    //                 <div className={styles.brandNavLogoWrapper} >
    //                     <p>A<span className={styles.navLogoSpan} >e</span>sop<span className={styles.navRegisterCharacter}>&reg;</span></p>
    //                 </div>

    //                 <div className={styles.dektopOptions} >
    //                     <div className={styles.optionTextWrapper}><p>Skin Care</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Body & Hand</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Hair</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Fragrance</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Home</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Kits & Travel</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Gifts</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Read</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Stores</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Facial Appointments</p></div>
    //                     <div className={styles.optionTextWrapper}><Icon icon="gg:search" className={styles.searchIcon} /></div>
    //                 </div>

    //                 <div className={styles.mobileOptions} >
    //                     <div className={styles.optionTextWrapper}><p>Shop</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Read</p></div>
    //                     <div className={styles.optionTextWrapper}><p>Stores</p></div>
    //                     <div className={styles.optionTextWrapper}><Icon icon="gg:search" className={styles.searchIcon} /></div>
    //                 </div>

    //                 <div className={styles.mobileNavIconWrapper} >
    //                     <div className={styles.optionTextWrapper}><Icon icon="gg:search" className={styles.searchIcon} /></div>
    //                     <div className={styles.optionTextWrapper}><p><Icon icon="clarity:heart-line" className={styles.searchIcon} /></p></div>
    //                     <div className={styles.optionTextWrapper}><p>Cart</p></div>
    //                     <div className={styles.optionTextWrapper}><p><Icon icon="ci:hamburger-md" className={styles.searchIcon} /></p></div>
    //                 </div>

    //             </div>
    //             <div className={styles.rightNavOptionsList}>
    //                 <div className={styles.optionTextWrapper}><p>Log in</p></div>
    //                 <div className={styles.optionTextWrapper}><p>Cabinate</p></div>
    //                 <div className={styles.optionTextWrapper}><p>Cart</p></div>
    //             </div>
    //         </div>
    //     )

    // }

    return (
        <>
            <div className={styles.heroSectionWrapper} >

                <div className={`${styles.globalNavWrapper} ${navBarOutOfView && styles.globalNavWrapperFixed} `} ref={navBarRef}>

                    <div className={styles.leftNavOptionsList} >

                        <div className={styles.brandNavLogoWrapper} >
                            <p>A<span className={styles.navLogoSpan} >e</span>sop<span className={styles.navRegisterCharacter}>&reg;</span></p>
                        </div>

                        <div className={styles.dektopOptions} >
                            <div className={styles.optionTextWrapper}><p>Skin Care</p></div>
                            <div className={styles.optionTextWrapper}><p>Body & Hand</p></div>
                            <div className={styles.optionTextWrapper}><p>Hair</p></div>
                            <div className={styles.optionTextWrapper}><p>Fragrance</p></div>
                            <div className={styles.optionTextWrapper}><p>Home</p></div>
                            <div className={styles.optionTextWrapper}><p>Kits & Travel</p></div>
                            <div className={styles.optionTextWrapper}><p>Gifts</p></div>
                            <div className={styles.optionTextWrapper}><p>Read</p></div>
                            <div className={styles.optionTextWrapper}><p>Stores</p></div>
                            <div className={styles.optionTextWrapper}><p>Facial Appointments</p></div>
                            <div className={styles.optionTextWrapper}><Icon icon="gg:search" className={styles.searchIcon} /></div>
                        </div>

                        <div className={styles.mobileOptions} >
                            <div className={styles.optionTextWrapper}><p>Shop</p></div>
                            <div className={styles.optionTextWrapper}><p>Read</p></div>
                            <div className={styles.optionTextWrapper}><p>Stores</p></div>
                            <div className={styles.optionTextWrapper}><Icon icon="gg:search" className={styles.searchIcon} /></div>
                        </div>

                        <div className={styles.mobileNavIconWrapper} >
                            <div className={styles.optionTextWrapper}><Icon icon="gg:search" className={styles.searchIcon} /></div>
                            <div className={styles.optionTextWrapper}><p><Icon icon="clarity:heart-line" className={styles.searchIcon} /></p></div>
                            <div className={styles.optionTextWrapper}><p>Cart</p></div>
                            <div className={styles.optionTextWrapper}><p><Icon icon="ci:hamburger-md" className={styles.searchIcon} /></p></div>
                        </div>

                    </div>
                    <div className={styles.rightNavOptionsList}>
                        <div className={styles.optionTextWrapper}><p>Log in</p></div>
                        <div className={styles.optionTextWrapper}><p>Cabinate</p></div>
                        <div className={styles.optionTextWrapper}><p>Cart</p></div>
                    </div>
                </div>

                <div className={styles.bannerImgwrapper}></div>

                <div className={styles.contentWrapper} >
                    <div className={styles.brandLogoWrapper}>
                        <div className={styles.logoTextWrapper} >
                            <p>A<span className={styles.logoTextSpan} >e</span>sop<span className={styles.registerCharacter}>&reg;</span></p>
                        </div>
                    </div>

                    <div className={styles.discoverContentWrapper}>
                        <div className={styles.primaryHeadingWrapper}><p>Bar Soaps</p></div>
                        <div className={styles.secondaryHeadingWrapper}><p>A body care classic, reimagined </p></div>
                        <div className={styles.contentTextWrapper}><p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits. </p></div>
                        <div className={styles.buttonWrapper}>
                            <LinkBtn />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection