import {
  React, useState, useRef, lazy, Suspense,
} from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';
import Footer from './components/Footer';
import UseScrollToTop from './hooks/useScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import { Burger, Menu } from './components/hamburger';

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/Header'));

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <AnimatePresence>
      <div className="App">
        <div>
          <Suspense fallback={(
            <div className="div">
              <svg className="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#5ebd3e" />
                    <stop offset="33%" stopColor="#ffb900" />
                    <stop offset="67%" stopColor="#f78200" />
                    <stop offset="100%" stopColor="#e23838" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="#e23838" />
                    <stop offset="33%" stopColor="#973999" />
                    <stop offset="67%" stopColor="#009cdf" />
                    <stop offset="100%" stopColor="#5ebd3e" />
                  </linearGradient>
                </defs>
                <g fill="none" strokeLinecap="round" strokeWidth="16">
                  <g className="ip__track" stroke="#ddd">
                    <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                    <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                  </g>
                  <g strokeDasharray="180 656">
                    <path className="ip__worm1" stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                    <path className="ip__worm2" stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                  </g>
                </g>
              </svg>
            </div>
          )}
          >
            <Router>
              <Header />
              <div ref={node} className="hamburger">
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </Router>
            <UseScrollToTop />
          </Suspense>

        </div>

      </div>
    </AnimatePresence>
  );
}

export default App;
