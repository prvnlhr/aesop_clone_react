import React from 'react'
import styles from "./styles/shippingBannerStyles.module.css"
const ShippingBanner = ({ shippingBannerRef }) => {
    return (
        <div className={styles.shippingBannerWrapper} ref={shippingBannerRef} >
            <div className={styles.textWrapper} >
                <p>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400  <span>&#43;</span> </p>
            </div>
        </div>
    )
}

export default ShippingBanner