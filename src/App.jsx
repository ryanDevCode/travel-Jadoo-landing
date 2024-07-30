import './App.css';
import Book from './components/Book';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
function App() {

  return (
    <>
    <div className="website">
      <div className="background-section">
         <Nav/>
         <Hero/>  
      </div>
      <div>
        <Services/>
        <Destination/>
        <Book/>
        <Testimonial/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
     
    </>
  )
}

export default App
