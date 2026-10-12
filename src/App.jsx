import { useEffect } from 'react';
import Lenis from 'lenis';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

// Ease-out: fast start, long gentle deceleration into the target
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function App() {

  // Smooth, decelerating scroll for wheel/trackpad and in-page anchor links.
  // Touch keeps native momentum; reduced-motion users keep native scrolling.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      anchors: { duration: 1.4, easing: easeOutExpo },
    });
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Main/>
        <Work/>
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
    </>
  )
}

export default App
