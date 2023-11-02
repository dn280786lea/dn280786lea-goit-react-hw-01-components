

const GetUserElem = ({ user }) => {
	return (
		<div >
			 <img src={user.avatar} alt="User avata" class="avatar"/>
            <p>{user.username}</p>
            <p>{user.tag}</p>
            <p>{user.location}</p>
            <ul class="stats">
                <li><span class="label">followers</span>
                    <span class="quantity">{user.stats.followers}</span></li>
                <li><span class="label">views</span>
                    <span class="quantity">{user.stats.views}</span></li>
                <li><span class="label">likes</span>
                 <span class="quantity">{user.stats.likes}</span></li>
            </ul>
		</div>
 );
}


export default GetUserElem