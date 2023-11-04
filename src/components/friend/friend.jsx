import PropTypes from 'prop-types';
import {}  from './styled.css';

function FriendListItem  ({friends}){
      return (
            <ul className="friends-list">
            {friends.map((friend) => (
            <li className="item-friend" key={friend.id}>
             <span className={`status-friend ${friend.isOnline ? 'green' : 'red'}`}>
          </span>
            <img className="avatar-friend" src={friend.avatar} alt={friend.name} width="70" />
            <p className="name-friend">{friend.name}</p>
            </li> ))}
      </ul>

 );
}


FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;