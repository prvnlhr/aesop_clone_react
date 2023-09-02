import React from 'react'
import styles from "./styles/footerSectionStyles.module.css"
const FooterSection = () => {

    const LinkArrowIcon = () => {
        return (
            <div className={styles.linkIconDiv} >
                <svg
                    className={styles.linkIcon}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M6 19L19 6M19 6V18.48M19 6H6.52" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg >
            </div>

        )
    }
    return (
        <div className={styles.footerSectionWrapper}>
            <div className={styles.footerSectionInnerWrapper}>

                <div className={styles.emailCell}>
                    <div className={styles.headingCell} >
                        <p>Subscribe to Aesop communications</p>
                    </div>

                    <div className={styles.emailContentCell} >
                        <div className={styles.emailInputCell} >
                            <div className={styles.inputWrapper} >
                                <input className={styles.emailInput} placeholder='Email address' />
                                <div className={styles.emailInputIconDiv} >
                                    <svg
                                        style={{ width: '50%' }}
                                        viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8531 7.1459C12.8997 7.19234 12.9366 7.24752 12.9618 7.30827C12.987 7.36901 13 7.43413 13 7.4999C13 7.56567 12.987 7.63079 12.9618 7.69153C12.9366 7.75228 12.8997 7.80745 12.8531 7.8539L8.85311 11.8539C8.75922 11.9478 8.63188 12.0005 8.49911 12.0005C8.36633 12.0005 8.23899 11.9478 8.14511 11.8539C8.05122 11.76 7.99847 11.6327 7.99847 11.4999C7.99847 11.3671 8.05122 11.2398 8.14511 11.1459L11.2921 7.9999L2.49911 7.9999C2.3665 7.9999 2.23932 7.94722 2.14555 7.85345C2.05178 7.75968 1.99911 7.63251 1.99911 7.4999C1.99911 7.36729 2.05178 7.24011 2.14555 7.14635C2.23932 7.05258 2.3665 6.9999 2.49911 6.9999L11.2921 6.9999L8.14511 3.8539C8.09862 3.80741 8.06174 3.75222 8.03658 3.69148C8.01142 3.63074 7.99847 3.56564 7.99847 3.4999C7.99847 3.43416 8.01142 3.36906 8.03658 3.30832C8.06174 3.24758 8.09862 3.19239 8.14511 3.1459C8.19159 3.09941 8.24678 3.06254 8.30752 3.03738C8.36826 3.01222 8.43336 2.99927 8.49911 2.99927C8.56485 2.99927 8.62995 3.01222 8.69069 3.03738C8.75143 3.06254 8.80662 3.09941 8.85311 3.1459L12.8531 7.1459Z" fill="white" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className={styles.checkBoxCell} >
                            <input type="checkbox" id="customCheckbox" name="customCheckbox" value="Yes" />
                            <label className={styles.checkBoxLabel} for="customCheckbox">
                                <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
                            </label>
                        </div>
                    </div>

                </div>


                <div className={styles.orderSupportCell}>
                    <div className={styles.headingCell} >
                        <p>Orders and support</p>

                    </div>
                    <div className={styles.listCell} >
                        <div className={styles.listItemWrapper} ><p>Contact us</p> <LinkArrowIcon /> </div>
                        <div className={styles.listItemWrapper} ><p>FAQs</p><LinkArrowIcon /></div>
                        <div className={styles.listItemWrapper} ><p>Shipping</p><LinkArrowIcon /></div>
                        <div className={styles.listItemWrapper} ><p>Returns</p><LinkArrowIcon /></div>
                        <div className={styles.listItemWrapper} ><p>Order history</p><LinkArrowIcon /></div>
                        <div className={styles.listItemWrapper} ><p>Terms and conditions</p><LinkArrowIcon /></div>
                    </div>
                </div>

                <div className={styles.servicesCell}>
                    <div className={styles.headingCell} >
                        <p>Services</p>
                    </div>
                    <div className={styles.listCell} >
                        <div className={styles.listItemWrapper} ><p>Live assistance</p></div>
                        <div className={styles.listItemWrapper} ><p>Corporate gifts</p></div>
                        <div className={styles.listItemWrapper} ><p>Facial Appointments</p></div>
                        <div className={styles.listItemWrapper} ><p>Click and Collect</p></div>
                        <div className={styles.listItemWrapper} ><p>Video consultation</p></div>
                    </div>
                </div>

                <div className={styles.locationPrefCell}>
                    <div className={styles.headingCell} >
                        <p>Location preferences</p>
                    </div>
                    <div className={styles.shipLangCell} >
                        <div className={styles.shippingCell} >
                            <div className={styles.locationPreSubListHeadingCell} >
                                <p>Shipping:</p>
                            </div>
                            <div className={styles.locationPreSubListCell} >
                                <div className={styles.subListItemWrapper} ><p style={{ textDecoration: 'underline' }}>Hong Kong SAR, China</p></div>
                            </div>
                        </div>

                        <div className={styles.languageCell} >
                            <div className={styles.locationPreSubListHeadingCell} >
                                <p>Language: </p>
                            </div>
                            <div className={styles.locationPreSubListCell} >
                                <div className={styles.subListItemWrapper} ><p style={{ textDecoration: 'underline' }}>English</p></div>
                                <div className={styles.subListItemWrapper} ><p>繁體中文</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sustanibilityCell}>
                    <div className={styles.headingCell} >
                        <p>Sustainability</p>
                    </div>
                    <div className={styles.sustanibilityTextCell} >
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.  <span>Learn More</span></p>
                    </div>
                </div>

                <div className={styles.aboutCell}>
                    <div className={styles.headingCell} >
                        <p>About</p>
                    </div>
                    <div className={styles.listCell} >
                        <div className={styles.listItemWrapper} ><p>Our story</p></div>
                        <div className={styles.listItemWrapper} ><p>Foundation</p></div>
                        <div className={styles.listItemWrapper} ><p>Careers</p></div>
                        <div className={styles.listItemWrapper} ><p>Privacy policy</p></div>
                        <div className={styles.listItemWrapper} ><p>Accessibility</p></div>
                        <div className={styles.listItemWrapper} ><p>Cookie Policy</p></div>
                    </div>
                </div>

                <div className={styles.socialMediaCell}>
                    <div className={styles.headingCell} >
                        <p>Social media</p>
                    </div>
                    <div className={styles.listCell} >
                        <div className={styles.listItemWrapper} ><p>Instagram</p> <LinkArrowIcon /> </div>
                        <div className={styles.listItemWrapper} ><p>Twitter</p><LinkArrowIcon /></div>
                        <div className={styles.listItemWrapper} ><p>LinkedIn</p><LinkArrowIcon /></div>
                        <div className={styles.listItemWrapper} ><p>WeChat</p><LinkArrowIcon /></div>
                        <div className={styles.listItemWrapper} ><p>Weibo</p><LinkArrowIcon /></div>
                    </div>
                </div>

                <div className={styles.emptyCell}>
                </div>
            </div>
        </div>
    )
}

export default FooterSection