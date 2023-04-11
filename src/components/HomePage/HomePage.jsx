import Filter from '../Filter/Filter'
import './HomePage.css' 

export default function HomePage() {

  return (
    <section className='home-page'>
      <Filter />
      <h2>Top Stories</h2>
      <div className='cards-container'>
        {/* {filteredCards} */}
      </div>
    </section>
  )
}