import PropTypes from 'prop-types';

function FriendListItem  ({friends}){
      return (
            <ul className="friend-list">
            {friends.map((friend) => (
            <li className="item" key={friend.id}>
            <span className="status">{friend.isOnline}</span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="70" />
            <p className="name">{friend.name}</p>
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