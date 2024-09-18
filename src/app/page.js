import Navbar from "./components/home/navbar";
import HeroSection from "./components/home/hero";
import AboutSection from "./components/home/about";
import Showcase from './components/home/showcase'

export default function Home() {
  return (
    <div className="main-container w-full min-h-screen">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Showcase/>
    </div>
  );
}
