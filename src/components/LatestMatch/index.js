// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    umpires,
    venue,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latestMatchContainer">
      <div className="latestMatch">
        <p className="latestMatchTeam">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="matchContainerPara">{venue}</p>
        <p className="matchContainerPara">{result}</p>
      </div>
      <img
        className="latestLogo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="aboutMatch">
        <p>First Innings</p>
        <p className="aboutContainerSelectivePara">{firstInnings}</p>
        <p>Second Innings</p>
        <p className="aboutContainerSelectivePara">{secondInnings}</p>
        <p>Man Of The Match</p>
        <p className="aboutContainerSelectivePara">{manOfTheMatch}</p>
        <p>Umpires</p>
        <p className="aboutContainerSelectivePara">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
