import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../styles/home.css';

function Home() {
  useGSAP(() => {
    gsap.to('.cosito', {
      autoAlpha: 1,
      y: 500,
      ease: 'power3.inOut',
      duration: 0.5,
      scrollTrigger: {
        trigger: '.cosito',
        markers: true,
        scrub: 2,
        start: 'top top',
        end: 'bottom 65%',
        scroller: '.container',
        toggleActions: 'play reverse play reverse',
        //              onEnter onLeave onEnterBack onLeaveBack
        onToggle: (self) => {
          if (self.isActive) {
            console.log(`heading has become active`);
            // Aimation or logic for when the section comes into view
          } else {
            // Animation or logic for when the section goes out of view
          }
        },
      },
    });
  }, []);

  return (
    <section className='home'>
      <div className='cosito'></div>
    </section>
  );
}

export default Home;
