import {}  from './styled.css';

const GetUserElem = ({ user }) => {
	return (
        <div class="user-info container">
            <div class="user-foto">
			 <img src={user.avatar} alt="User avata" className="avatar"/>
            <p class="user-name">{user.username}</p>
            <p class="user-tag">{user.tag}</p>
                <p class="user-tag">{user.location}</p>
            </div>
                <ul className="stats ">
                    <div className="stats-line">
                <li><span className="label">followers</span>
                            <span className="quantity">{user.stats.followers}</span></li>
                </div>
                 <div className="stats-line">
                <li><span className="label with-line">views</span>
                        <span className="quantity">{user.stats.views}</span></li>
                </div> 
                <li><span className="label">likes</span>
                        <span className="quantity">{user.stats.likes}</span></li>
    
                </ul>
		</div>
 );
}


export default GetUserElem