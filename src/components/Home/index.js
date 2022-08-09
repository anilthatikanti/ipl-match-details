// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoaded: false}

  componentDidMount = () => {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updateTeam = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    console.log(updateTeam)
    this.setState({
      teamsList: updateTeam,
      isLoaded: true,
    })
  }

  render() {
    const {teamsList, isLoaded} = this.state

    return (
      <div className="container">
        <div className="logoContainer">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoaded ? (
          <ul className="un-list">
            {teamsList.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        ) : (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}
export default Home
