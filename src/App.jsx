
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cart from './components/Card'
import { cards } from './components/data/cards'



function App() {
  const cardElements = cards.map((card)=>{
    return(<Cart id = {card.id}
                 card = {card}/>) 
  });
  return(
    <>
     <Navbar />
     <Hero />
     <section className="cards-list">
      {cardElements}   
     </section>
    </>
  ) 
}

export default App
// img:"../assets/images/image 12.png"
// rating:'5.0'
// country:'(6)USA'
// title:"Life lessons with Katie Zaferes"
// price:"136"