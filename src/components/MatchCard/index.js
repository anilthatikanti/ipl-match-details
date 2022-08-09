// Write your code here
import './index.css'

const MatchCard = props => {
  const {RecentMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = RecentMatch
  const statusClassName = matchStatus === 'Won' ? 'win' : 'loss'
  console.log(matchStatus)

  return (
    <li className="recentMatchCard">
      <img
        className="recentTeamLogo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="recentTeamHeading ">{competingTeam}</p>
      <p className="recentTeamPara">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
