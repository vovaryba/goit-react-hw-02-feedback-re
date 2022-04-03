import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import Container from 'components/Container/Container';
import StatisticsList from 'components/StatisticsList/StatisticsList';
import data from 'components/StatisticsList/data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Container>
        <StatisticsList title="Upload stats" stats={data} />
        <StatisticsList stats={data} />
      </Container>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
