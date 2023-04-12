import { Routes, Route } from 'react-router'
import CardContainer from '../HomePage/HomePage'
import Header from '../Header/Header'
import './App.css'
import HomePage from '../HomePage/HomePage'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route></Route>
      </Routes>
    </main>
  )
}

export default App
