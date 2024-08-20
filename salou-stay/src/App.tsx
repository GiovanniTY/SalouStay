import Hero from './components/Hero';
import Gallery from './components/Gallery';
import './App.css';
import Features from './components/Features';
import Proximity from './components/Proximity';
import MapSection from './components/MapSection';
import BookingSection from './components/BookingSection';


const App: React.FC = () => {
  return (
      <div className="App">
          <Hero />
          <Features/>
          <Proximity/>
          <Gallery />
          <BookingSection/>
          <MapSection/>
         
      </div>
  );
};

export default App;
