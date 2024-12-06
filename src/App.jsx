
import './App.css'
import DebitCard from './Components/DebitCard'
import Feedback from './Components/Feedback'
import Hero from './Components/Hero'
import NavbarArea from './Components/NavbarArea'
import Offer from './Components/Offer'
import PerfectCard from './Components/PerfectCard'
import Vision from './Components/Vision'

function App() {

  return (
    <>
    <main className='overflow-x-hidden'>
    <NavbarArea/>
    <div className='w-full max-w-[1440px] px-2 md:px-10 lg:px-20 xl:px-24 mx-auto py-5'>
    <Hero/>
    <Vision/>
    <Offer/>
    <DebitCard/>
    <PerfectCard/>
    <Feedback/>
    </div>

    </main>
    </>
  )
}

export default App
