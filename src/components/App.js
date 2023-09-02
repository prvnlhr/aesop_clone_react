import React, { useState, useEffect, useRef } from 'react'
import styles from "./app.module.css";
import AthenaeumSection from "./athenaeumSection/AthenaeumSection";
import HeroSection from "./heroSection/HeroSection";
import PostPooSection from "./washRoomSection/PostPooSection";
import ForHomeComponent from "./forHomeSection/ForHomeComponent"
import SkinSection from "./skinSection/SkinSection";
import BodySection from "./bodySection/BodySection";
import StoreSection from "./storeSection/StoreSection";
import QuoteSection from "./quoteSection/QuoteSection";
import FooterSection from "./footerSection/FooterSection";
import AlertBanner from "./alertBanner/AlertBanner"
import ShippingBanner from "./shippingBanner/ShippingBanner"

const App = () => {

  const scrollWrapperRef = useRef();

  const navBarRef = useRef(null);



  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [scrolledDown, setScrolledDown] = useState(false);
  const [navBarOutOfView, setNavBarOutOfView] = useState(false);

  const handleScroll = () => {


    const currentScrollPos = scrollWrapperRef.current.scrollTop;

    console.log(currentScrollPos);
    const scrollThreshold = 5;

    const scrollDiff = currentScrollPos - prevScrollPos;

    const scrollingDown = scrollDiff > 0;

    if (currentScrollPos >= (80 + 82 + 10)) {
      setNavBarOutOfView(true);
      let newTop = -80;

      if (scrollingDown) {
        newTop = -80;
      } else {
        newTop = 0;
      }
      if (navBarRef.current) {
        navBarRef.current.style.top = `${newTop}px`;
      }
    } else if (currentScrollPos < (80 + 82 + 10)) {
      setNavBarOutOfView(false);
    }

    setVisible(currentScrollPos < scrollThreshold || currentScrollPos < 10);

    if (currentScrollPos > 10) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }

    setPrevScrollPos(currentScrollPos);

  };


  useEffect(() => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.addEventListener('scroll', handleScroll);
    }

    return () => scrollWrapperRef.current.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


  return (
    <div className={styles.app}>
      <div className={styles.appInnerwrapper} ref={scrollWrapperRef} >
        {/* <div className={`${styles.globalNavWrapper} ${navBarOutOfView && styles.globalNavWrapperFixed} `} ref={navBarRef}></div> */}
        <AlertBanner />
        <ShippingBanner />
        <HeroSection navBarOutOfView={navBarOutOfView} navBarRef={navBarRef} />
        <BodySection />
        <AthenaeumSection />
        <SkinSection />
        <PostPooSection />
        <ForHomeComponent />
        <StoreSection />
        <QuoteSection />
        <FooterSection />
      </div>
    </div >
  );
}

export default App;
