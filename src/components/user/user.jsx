

const GetUserElem = ({ user }) => {
	return (
		<div >
			 <img src={user.avatar} alt="User avata" className="avatar"/>
            <p>{user.username}</p>
            <p>{user.tag}</p>
            <p>{user.location}</p>
            <ul className="stats">
                <li><span className="label">followers</span>
                    <span className="quantity">{user.stats.followers}</span></li>
                <li><span className="label">views</span>
                    <span className="quantity">{user.stats.views}</span></li>
                <li><span className="label">likes</span>
                 <span className="quantity">{user.stats.likes}</span></li>
            </ul>
		</div>
 );
}


export default GetUserElem