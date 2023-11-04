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
    <div className='main-container'>
      <section className="user_secion"><GetUserElem user={user} /></section>
      <section className="statistics_secion"><Statistics title="Upload stats" stats={label} /></section>
      <section className="friend_secion" >< FriendListItem friends={friend} /></section> 
      <section className="transaction_secion" ><TransactionHistory items={transaction} /></section>  
    </div>
  );
};

export default App;