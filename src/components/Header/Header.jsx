import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <h1 onClick={() => navigate('/')}>The NY Times News Reader</h1>
    </header>
  )
}