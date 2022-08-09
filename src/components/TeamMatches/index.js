// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {selectTeam: {}, isLoaded: false}

  componentDidMount = () => {
    this.getMatchPage()
  }

  formattingMatches = latestMatchData => ({
    umpires: latestMatchData.umpires,
    result: latestMatchData.result,
    manOfTheMatch: latestMatchData.man_of_the_match,
    id: latestMatchData.id,
    date: latestMatchData.date,
    matchStatus: latestMatchData.match_status,
    firstInnings: latestMatchData.first_innings,
    secondInnings: latestMatchData.second_innings,
    competingTeam: latestMatchData.competing_team,
    competingTeamLogo: latestMatchData.competing_team_logo,
    venue: latestMatchData.venue,
  })

  getMatchPage = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatePage = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.formattingMatches(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.formattingMatches(eachMatch),
      ),
    }
    this.setState({selectTeam: updatePage, isLoaded: true})
  }

  getLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getResult = () => {
    const {selectTeam} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = selectTeam
    return (
      <div className="banner">
        <img className="banner-image" src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="teamMatchUnList">
          {recentMatches.map(eachRecentMatch => (
            <MatchCard RecentMatch={eachRecentMatch} key={eachRecentMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  getBgColorOfTeam = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'MI':
        return 'mi'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'SH':
        return 'sh'
      case 'RR':
        return 'rr'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoaded} = this.state
    const className = `teamContainer ${this.getBgColorOfTeam()}`
    console.log(isLoaded)

    return (
      <div className={className}>
        {isLoaded ? this.getResult() : this.getLoader()}
      </div>
    )
  }
}
export default TeamMatches
