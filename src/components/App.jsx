import React from 'react';
import GetUserElem from '../components/user/user';
import Statistics from '../components/label/label';
import FriendListItem from '../components/friend/friend'; 
import TransactionHistory from '../components/transactions/transaction'; 



import user from './data/user.json';
import label from './data/label.json';
import friend from './data/friend.json';
import transaction from './data/transactions.json';





export const App = () => {
  return (
    <div>
      <section><GetUserElem user={user} /></section>
      <section><Statistics title="Upload stats" stats={label} /></section>
      <section>< FriendListItem friends={friend} /></section> 
      <section><TransactionHistory items={transaction} /></section>  
    </div>
  );
};

export default App;