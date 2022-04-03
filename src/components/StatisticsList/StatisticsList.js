import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import s from './StatisticsList.module.css';

function StatisticsList({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <Statistics
            key={stat.id}
            label={stat.label}
            value={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default StatisticsList;
