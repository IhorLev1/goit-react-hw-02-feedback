import FeedbackButton from './FeedbackButton';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  // const [good, neutral, bad] = options;
  return (
    <div>
      {options.map(option => (
        <FeedbackButton name={option} callback={onLeaveFeedback} />
      ))}
      {/* <FeedbackButton name={good} callback={onLeaveFeedback} />
      <FeedbackButton name={neutral} callback={onLeaveFeedback} />
      <FeedbackButton name={bad} callback={onLeaveFeedback} /> */}
    </div>
  );
}

FeedbackOptions.defaultProps = {
  options: ['good', 'neutral', 'bad'],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
