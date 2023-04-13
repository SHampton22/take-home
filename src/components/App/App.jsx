import { Routes, Route } from 'react-router'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import DetailsPage from '../DetailsPage/DetailsPage'
import './App.css'

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/article-details/:id' element={<DetailsPage />}></Route>
      </Routes>
    </main>
  )
}