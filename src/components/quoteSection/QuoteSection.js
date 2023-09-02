import React from 'react'
import styles from "./styles/quoteSectionStyles.module.css"

const QuoteSection = () => {
    return (
        <div className={styles.quoteSectionWrapper} >
            <p className={styles.quoteText}> ‘Life never becomes a habit to me. It's always a marvel.’</p>
            <p className={styles.quoteAuthor} >Katherine Mansfield</p>
        </div >
    )
}

export default QuoteSection