import PropTypes from 'prop-types';
import {} from './TransactionHistory.styled.css';

function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead className="trans-caption">
        <tr>
          <th className="type">Type</th>
          <th className="type">Amount</th>
          <th className="type">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className="table-row">
            <td className="amount">{item.type}</td>
            <td className="amount">{item.amount}</td>
            <td className="amount">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
