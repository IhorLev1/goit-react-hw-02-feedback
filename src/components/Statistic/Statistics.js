import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className={s.statisticsItem}>
      Good : <span>{good}</span>
    </p>
    <p className={s.statisticsItem}>
      Neutral : <span>{neutral}</span>
    </p>
    <p className={s.statisticsItem}>
      Bad : <span>{bad}</span>
    </p>
    <p className={s.statisticsItem}>
      Total : <span>{total}</span>
    </p>
    <p className={s.statisticsItem}>
      Positive feedback : <span>{positivePercentage} % </span>
    </p>
  </div>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
