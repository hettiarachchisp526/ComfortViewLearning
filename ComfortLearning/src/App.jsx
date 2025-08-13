import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
   <div className="">
    <Navbar/>
    <div className="container mx-auto px-6 max-w-[1720px]">
     <Hero/>

    </div>
   </div>
  )
}

export default App
