import Header from "../components/Header";
import About from "../components/Aboutus";
import Band from "../components/Band";
import Portfolio from "../components/Portfolio";
import Brand from "../components/BrandStory";
import Partners from "../components/Partners";
import Contact from '../components/Contatcus';
import Map from '../components/Map';
import MainBanner from '../components/MainBanner';

export default function MainLayout() {
  return (
    <main>
      {/* <MainBanner /> */}
      <Header />
      <div class="content-wrapper">
        <About />
        <Band />
        <Portfolio />
        <Brand />
        <Partners />
        <Contact />
        <Map/>
      </div>
    </main>
  );
}
