import React from 'react';
import GetUserElem from './user/GetUserElem';
import Statistics from './Statistics/Statistics';
import FriendListItem from './FriendListItem/FriendListItem'; 
import TransactionHistory from './transactions/TransactionHistory'; 



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
      <section className="transaction_section" ><TransactionHistory items={transaction} /></section>  
    </div>
  );
};

export default App;