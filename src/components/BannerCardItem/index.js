// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <h1 className="title">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <div>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
