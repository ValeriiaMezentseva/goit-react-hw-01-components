import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './App.styled';
import user from '../../user'
import data from '../../data'
import friends from '../../friends'
import transactions from '../../transactions'
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionsHistory } from 'components/TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </Container>
  );
};
