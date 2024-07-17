
import './App.css'
import BasketballPlayerCard from './components/BasketballPlayerCard'
import lebron from './assets/lebron.jpg';

function App() {

  return (
    <>
    <BasketballPlayerCard 
    name="LeBron James"
    image={lebron}
    position="Forward"
    stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1,
    reboundsPerGame: 10.5 }}
    />
    </>
  )
}

export default App
