import './index.css'

const Thumbnailltem = props => {
  const {eachDetails, updadtePic, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = eachDetails

  const updatePicInGallery = () => {
    updadtePic(id)
  }

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-item">
      <button onClick={updatePicInGallery} className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default Thumbnailltem
