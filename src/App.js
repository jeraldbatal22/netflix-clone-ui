import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
// import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
