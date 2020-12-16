import PropTypes from 'prop-types';
import s from './Button.module.css';

const FeedbackButton = ({ name, callback }) => (
  <button className={s.button} name={name} type="button" onClick={callback}>
    {name}
  </button>
);

FeedbackButton.propTypes = {
  name: PropTypes.string,
  callback: PropTypes.func,
};

export default FeedbackButton;
