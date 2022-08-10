import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <tbody className={css.info}>
                <thead className={css.listHistory} >
                    <tr className={css.wrap}>               
                    <th className={css.type}>Type</th>
                    <th className={css.amount}>Amount</th>
                    <th className={css.currency}>Currency</th>
                    </tr>
                </thead>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={css.wrap} key={id}>
                        <th className={css.type}>{type}</th>
                        <th className={css.amount}>{amount}</th>
                        <th className={css.currency}>{currency}</th>      
                    </tr>
                ))}
            </tbody>
        </table>
    )
 }