import PropTypes from 'prop-types';
import styles from './css/Button.module.css';

const FeedbackButton = ({ name, callback }) => (
  <button
    className={styles.button}
    name={name}
    type="button"
    onClick={callback}
  >
    {name}
  </button>
);

FeedbackButton.propTypes = {
  name: PropTypes.string,
  callback: PropTypes.func,
};

export default FeedbackButton;
