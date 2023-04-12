import { Link, useLocation } from 'react-router-dom'
import './DetailsPage.css'

export default function DetailsPage() {
  const location = useLocation()
  const id = location.state.id
  const topStories = location.state.topStories
  console.log(location.state.id)
  console.log(location.state.topStories)

  

  return (
    <section className='details-page'>
      <div>
        <p className='details-category'>{topStories[id].section}</p>
        <Link to={topStories[id].short_url} style={{ textDecoration: 'none' }}>
          <h2 className='details-title'>{topStories[id].title}</h2>
        </Link>
        <p className='details-abstract'>{topStories[id].abstract}</p>
        <p className='details-by-line'>{topStories[id].byline}</p>
        <p className='details-date-published'>{topStories[id].published_date}</p>
      </div>
      <div className='details-image-container'>
        <p className='details-image-copyright'>{topStories[id].multimedia[0].copyright}</p>
        <img className='details-image'src={topStories[id].multimedia[0].url} />
      </div>
    </section>
  )
}