import PropTypes from 'prop-types';
import styles from 'components/Notification/Notification.module.css';

export default function Notification({ message }) {
    return (
        <p className={styles.message}>{message}</p>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};