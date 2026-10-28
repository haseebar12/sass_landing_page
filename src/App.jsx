import Hero from './components/Hero';
import Services from './components/Services';
import Feature from './components/Feature';
import Security from './components/Security';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { features } from './data';

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <div className="container features">
          {features.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
        <Security />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
