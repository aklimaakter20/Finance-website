
import './App.css'
import DebitCard from './Components/DebitCard'
import Faq from './Components/Faq'
import Feedback from './Components/Feedback'
import Footer from './Components/Footer'
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
    <Faq/>
    </div>
    <Footer/>
    </main>
    </>
  )
}

export default App
