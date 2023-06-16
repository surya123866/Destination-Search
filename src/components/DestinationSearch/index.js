import DestinationItem from '../DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const inputText = event => {}
  return (
    <div>
      <div className="content-container">
        <div className="textContainer">
          <h1 className="heading">Destination Search</h1>
          <input
            type="search"
            placeholder="search"
            className="input"
            onChange={inputText}
          />
        </div>
        <div className="image-container">
          {destinationsList.map(eachName => (
            <DestinationItem destinationItem={eachName} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DestinationSearch
