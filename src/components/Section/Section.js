import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <div>
    <h3 className={s.title}>{title}</h3>
    {children}
  </div>
);

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
