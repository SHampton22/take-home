import { useEffect, useState } from 'react'
import Filter from '../Filter/Filter'
import Card from '../Card/Card'
import { getTopStories } from '../../apiCalls'
import './HomePage.css' 

export default function HomePage() {
  const[filteredArticles, setFilteredArticles] = useState()

  useEffect(() => {
    getTopStories('home')
      .then(data => setFilteredArticles(data.results))
  }, [])

console.log(filteredArticles)

  // const displayArticles = filteredArticles.map(article => {
  //   return (
  //     <Card 
  //       key={article.uri}
  //       id={article.uri}
  //       section={article.section}
  //       title={article.title}
  //       image={article.multimedia[2].url}
  //     />
  //   )
  // })

  return (
    <section className='home-page'>
      <Filter />
      <h2>Top Stories</h2>
      <div className='cards-container'>
        {filteredArticles && filteredArticles.map((article, index) => {
    return (
      <Card 
        key={index}
        id={index}
        section={article.section}
        title={article.title}
        image={article.multimedia[2].url}
      />
    )
  })}
      </div>
    </section>
  )
}