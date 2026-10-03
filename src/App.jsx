import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Events from './components/Events.jsx'
import Form from './components/Form.jsx'
import Condition from './components/Condition.jsx'
import AgeChecker from './components/AgeCheker.jsx'
import Map from './components/map.jsx'
import Render from './components/Render.jsx'
import Api from './components/Api.jsx'
import Handling from './components/Handling.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Productdeatiles from './pages/Productdeatiles.jsx'

function App() {
  const [count, setCount] = useState(0)

  const products = [
    { id: 1, name: 'iPhone', price: 79999 },
    { id: 2, name: 'Samsung', price: 69999 },
    { id: 3, name: 'OnePlus', price: 49999 }  
  ]

  return (
    <>
      {/* <h1>React Components</h1>
      <h3>{count}</h3>
      <button className='btn' onClick={() =>setCount(count+1)}>+</button>
      <button className='btn' onClick={() =>setCount(count-1)}>-</button>
      <button onClick={() =>setCount(0)}>reset</button>
      <Navbar />
      <Hero name="Vishnu" age="22" role="developer"/>
      <Footer />
      <Events /> */}
      {/* <Form /> */}
      {/* <Condition /> */}
      {/* <AgeChecker /> */}
      {/* <Map/> */}
      {/* {products.map((product)=>(
        <Product id={product.id} name={product.name} price={product.price}/>
      ))} */}
      {/* <Render /> */}
      {/* <Api /> */}
      {/* <Handling /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/product' element={<Product />}>
            <Route path='iphone' element={<h2>Iphone Products</h2>}/>
            <Route path='samsung' element={<h2>Samsung Products</h2>}/>
          </Route>
          <Route path='/products/:id' element={<Productdeatiles/>}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
