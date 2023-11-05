
import { getRandomColor,Label,Title,List,Percentage,Item,Labeler } from './styled.js'


  const Statistics = ({ title, stats }) => {

  return (
      <Label>
          {title &&<Title>{title}</Title>}
          <List>
                {stats.map((stat) => (
                  <Item key={stat.id} style={{ backgroundColor: getRandomColor() }}>
                    <Labeler>{stat.label}</Labeler>
                  <Percentage>{stat.percentage}%</Percentage></Item>
                      ))}
              </List>
		</Label>
 );
}


export default Statistics


