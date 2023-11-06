import {} from './FriendListItem.styled.css';

export const FriendListItem = ({ avatarus, name, status }) => {
  return (
    <li className="friendlist">
      <span className={`status-friend ${status ? 'online' : 'offline'}`}></span>
      <img className="avatarus" src={avatarus} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
