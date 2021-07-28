import PropTypes from 'prop-types';
import styles from 'components/Statistics/Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul className={styles.statList}>
            <li className={styles.statListItem}>Good:&nbsp;
                <span className={styles.statNumber}>{good}</span>
            </li>
            <li className={styles.statListItem}>Neutral:&nbsp;
                <span className={styles.statNumber}>{neutral}</span>
            </li>
            <li className={styles.statListItem}>Bad:&nbsp;
                <span className={styles.statNumber}>{bad}</span>
            </li>
            <li className={styles.statListItem}>Total:&nbsp;
                <span className={styles.statNumber}>{total}</span>
            </li>
            <li className={styles.statListItem}>Positive Feedback:&nbsp;
                <span className={styles.statNumber}>{total > 0 && good > 0 && positivePercentage}&#x25;</span>
            </li>
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}


