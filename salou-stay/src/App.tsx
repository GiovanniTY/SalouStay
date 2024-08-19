import Hero from './components/Hero';
import Gallery from './components/Gallery';
import './App.css';
import Features from './components/Features';


const App: React.FC = () => {
  return (
      <div className="App">
          <Hero />
          <Features/>
          <Gallery />
         
      </div>
  );
};

export default App;
