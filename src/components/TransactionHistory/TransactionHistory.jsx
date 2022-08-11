import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export function TransactionHistory ({ items }) {
    return (
        <table className={css.transactionHistory}>
            <tbody className={css.info}>
                <tr className={css.wrap}>
                    <th className={css.type}>Type</th>
                    <th className={css.amount}>Amount</th>
                    <th className={css.currency}>Currency</th>
                </tr>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={css.wrap} key={id}>
                        <th className={css.type}>{type}</th>
                        <th className={css.amount}>{amount}</th>
                        <th className={css.currency}>{currency}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};