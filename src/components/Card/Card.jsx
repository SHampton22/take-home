import './Card.css'

export default function Card({ id, section, title, image }) {

  return (
    // <Link to={`/article-details/${id}`}>
      <div className='card' key={id}>
        <p className='card-category'>{section}</p>
        <p className='card-title'>{title}</p>
        <img className='card-thumbnail' src={image}/>
      </div>
    // </Link>
  )
}