import Hero from './components/Hero';
import Gallery from './components/Gallery';
import './App.css';
import Features from './components/Features';
import Proximity from './components/Proximity';
import MapSection from './components/MapSection';
import Tarif from './components/Tarif';
import VideoSection from './components/Video';



const App: React.FC = () => {
  return (
      <div className="App">
          <Hero />
          <Features/>
          <Proximity/>
          <Gallery />
          <VideoSection/>
          <Tarif/>
          <MapSection/>
         
      </div>
  );
};

export default App;
