import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Project from './pages/Project'

function App() {

  return (
    <>
      <Header />


      <div id="HOME">
        <Home />
      </div>

      <div id="PROJECTS">
        <Project />
      </div>

      {/* <div id="timeline">
        <Timeline />
      </div> */}

      {/* <div id="CONTACT">
        <Contact />
      </div> */}

      <Footer />
    </>
  )
}

export default App
