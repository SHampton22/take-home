import { useEffect, useState } from 'react'
import { getTopStories } from '../../apiCalls'
import Filter from '../Filter/Filter'
import Card from '../Card/Card'
import './HomePage.css' 

export default function HomePage() {
  const[topStories, setTopStories] = useState()
  const[category, setCategory] = useState('home')

  useEffect(() => {
    getTopStories(category)
      .then(data => setTopStories(data.results))
  }, [category])

  return (
    <section className='home-page'>
      <Filter setCategory={setCategory}/>
      <h2 className='home-page-title'>Top Stories</h2>
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
                byline={article.byline}
                topStories={topStories}
              />
            )
          }
        })}
      </div>
    </section>
  )
}