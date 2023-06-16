import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <div>
      <img src={imgUrl} className="image" alt="icon" />
      <h1 className="imageName">{name}</h1>
    </div>
  )
}

export default DestinationItem
