import { Link, useLocation } from 'react-router-dom'
import './DetailsPage.css'

export default function DetailsPage() {
  const location = useLocation()
  const id = location.state.id
  const topStories = location.state.topStories

  return (
    <section className='details-page'>
      <div className='details'>
        <p className='details-category'>{topStories[id].section}</p>
        <Link to={topStories[id].short_url} >
          <h2 className='details-title'>{topStories[id].title}</h2>
        </Link>
        <p className='details-abstract'>{topStories[id].abstract}</p>
        <p className='details-byline'>{topStories[id].byline}</p>
        <div className='details-dates-container'>
          <p className='details-date-published'>{new Date(topStories[id].published_date).toDateString()}</p>
          <p className='details-date-updated'>Updated {new Date(topStories[id].updated_date).toLocaleTimeString()}</p>
        </div>
        <div className='details-image-container'>
          <p className='details-image-copyright'>{topStories[id].multimedia[0].copyright}</p>
          <img className='details-image'src={topStories[id].multimedia[0].url} />
        </div>
      </div>
    </section>
  )
}