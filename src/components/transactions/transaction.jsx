import PropTypes from 'prop-types';

function TransactionHistory({items}){
    return (
        <table className='transaction-history'>
            <thead>
                <tr>
                    <th className="type">Type</th>
                    <th className="type">Amount</th>
                    <th className="type">Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr className="type" key={item.id}>
                        <td className="amount">{item.type}</td>
                        <td className="amount">{item.amount}</td>
                        <td className="amount">{item.currency}</td>
                    </tr>))}
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
