import React from 'react'
import "./App2.css"
import Navbar from  "./components2/Navbar"
import Cart from './components2/Card'
import { cards } from './components2/data/cards'


const App2 = () => {
  const cardList = cards.map((card)=><Cart key ={card.id}
                                             {...card} />)
  return (
    <div>
      <Navbar />
      <section className="cards-list">
       {cardList}
      </section>
    </div>
  )
}

export default App2



