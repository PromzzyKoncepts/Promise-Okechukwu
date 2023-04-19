import { Suspense } from 'react';
import Skills from '../components/skills';
import Slider from '../components/Slider';
import Projects from '../components/Projects';

// const Projects = lazy(() => import('../components/Projects'));

const Home = () => (
  <Suspense>
    <div>
      <Slider />
      <Projects />
      <Skills />
    </div>

  </Suspense>

);
export default Home;
