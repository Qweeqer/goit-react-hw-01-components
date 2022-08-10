import { ProfileBoard } from './ProfileBoard/ProfileBoard';
import  User from '../db/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../db/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../db/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../db/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <ProfileBoard profile={User} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
