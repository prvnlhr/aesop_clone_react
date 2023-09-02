import React from 'react'
import styles from "./styles/alertBannerStyles.module.css"

const AlertBanner = ({ alertBannerRef }) => {
    return (
        <div className={styles.alertBannerWrapper} ref={alertBannerRef}>
            <p>Trained Aesop consultations are available to provide bespoke skin care advise.<span> Book a video consultation</span> </p>
        </div>
    )
}

export default AlertBanner