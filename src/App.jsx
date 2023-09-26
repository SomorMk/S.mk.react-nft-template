import About from "./assets/Components/About/About"
import Banner from "./assets/Components/Banner/Banner"
import Community from "./assets/Components/Community/Community"
import Counter from "./assets/Components/Counter/Counter"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"
import Roadmap from "./assets/Components/Roadmap/Roadmap"
import Team from "./assets/Components/Team/Team"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <About></About>
      <Roadmap></Roadmap>
      <Team></Team>
      <Community></Community>
      <Footer></Footer>
    </>
  )
}

export default App
