// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="list-style">
      <Link className="Link-style" exact to={`/team-matches/${id}`}>
        <img className="team-symbol" src={teamImageUrl} alt={name} />
        <div className="nameContainer">
          <p className="teamName">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
