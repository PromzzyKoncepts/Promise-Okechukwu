import { Suspense } from 'react';
import Skills from '../components/skills';
import Slider from '../components/Slider';
import Projects from '../components/Projects';
import Profile from '../components/Profile';

// const Projects = lazy(() => import('../components/Projects'));

const Home = () => (
  <Suspense>
    <div>
      <Profile />
      <Slider />
      <Projects />
      <Skills />
    </div>

  </Suspense>

);
export default Home;
