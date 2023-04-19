import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import UseScrollToTop from './hooks/useScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/Header'));

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <div>
          <Suspense fallback="Loading">
            <Router>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
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
