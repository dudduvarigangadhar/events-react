import './index.css'

const EventItem = props => {
  const {eventDetails} = props
  const {name, imageUrl, location, registrationStatus} = eventDetails
  return (
    <div className="event-item-container">
      <img src={imageUrl} alt="event" className="event-image" />
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </div>
  )
}

export default EventItem
