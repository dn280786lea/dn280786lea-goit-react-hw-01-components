import styles from './styles.css';

const Statistics = ({ title ,stats }) => {
  return (
      <div className="label-info label-container">
          <h2 className="title-label">Upload stats</h2>
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

