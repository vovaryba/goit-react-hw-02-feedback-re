import PropTypes from 'prop-types';
import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';
import s from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHeader}>
        <tr>
          <th className={s.columnHeading}>Type</th>
          <th className={s.columnHeading}>Amount</th>
          <th className={s.columnHeading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <TransactionHistoryItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default TransactionHistory;
