import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ label, value }) {
  const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <li className={s.item} style={{ backgroundColor: generateColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{value}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Statistics;
