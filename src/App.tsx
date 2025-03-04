import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './Pages/Products/ProductCard'
import CarouselSlider from './Pages/Products/CarouselSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CarouselSlider/>
 
    </>
  )
}

export default App
