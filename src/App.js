
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContuctUs from './components/aboutUs/ContuctUs';
import Analysis from './components/analisys/Analysis';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/pageNotFound/NotFound';
import Reviews from './components/reviews/Reviews';
import UnderConstruction from './components/underConstruction/UnderConstruction';
import logo from './logo.png';

function App() {
  return (
    <div className="container mx-auto">
      <div className='px-10 py-2 flex items-center justify-between drop-shadow-sm shadow-md bg-cyan-900 md:sticky top-0 z-30'>
        <img className='w-[60px]' src={logo} alt="" />
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contuctus" element={<ContuctUs />} />
        <Route path="underconstruction" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
