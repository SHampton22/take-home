import { useEffect, useState } from 'react'
import Filter from '../Filter/Filter'
import Card from '../Card/Card'
import { getTopStories } from '../../apiCalls'
import './HomePage.css' 

export default function HomePage() {
  const[topStories, setTopStories] = useState()
  const[category, setCategory] = useState('home')

  useEffect(() => {
    getTopStories(category)
      .then(data => setTopStories(data.results))
  }, [category])

console.log(topStories)

  return (
    <section className='home-page'>
      <Filter setCategory={setCategory}/>
      <h2>Top Stories</h2>
      <div className='cards-container'>
        {topStories && topStories.map((article, index) => {
          if (article.multimedia) {
            return (
              <Card 
                key={index}
                id={index}
                section={article.section}
                title={article.title}
                image={article.multimedia[2].url}
                topStories={topStories}
              />
            )
          }
        })}
      </div>
    </section>
  )
}