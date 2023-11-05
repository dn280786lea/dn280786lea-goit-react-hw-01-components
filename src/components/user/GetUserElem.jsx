import {}  from './GetUserElem.styled.css';

const GetUserElem = ({ user }) => {
	return (
        <div className="user-info container">
            <div className="user-foto">
			 <img src={user.avatar} alt="User avata" className="avatar"/>
            <p className="user-name">{user.username}</p>
            <p className="user-tag">{user.tag}</p>
                <p className="user-tag">{user.location}</p>
            </div>
                <ul className="stats ">

                <li className="status-follower"><span className="label">followers</span>
                            <span className="quantity">{user.stats.followers}</span></li>

                <li  className="status-follower"><span className="label with-line">views</span>
                        <span className="quantity">{user.stats.views}</span></li>

                <li  className="status-follower"><span className="label">likes</span>
                        <span className="quantity">{user.stats.likes}</span></li>
    
                </ul>
		</div>
 );
}


export default GetUserElem