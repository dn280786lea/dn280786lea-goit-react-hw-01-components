
const Statistics = ({ title ,stats }) => {
  return (
      <div >
          <h2 className="title">Upload stats</h2>
          <ul className="stat-list">
                {stats.map((stat) => (
                  <li className="item" key={stat.id}><span className="label">{stat.label}</span>
                  <span className="percentage">{stat.percentage}</span></li>
                      ))}
              </ul>
		</div>
 );
}


export default Statistics

