import { Navigation } from "../components/navigation";
import { Header } from '../components/Header';
import { Cards } from '../components/cards';
import { SectionOne } from '../components/sectionone';
import { SectionTwo } from '../components/sectionTwo';
import { Footer } from '../components/footer';

export const MainPage = () => {
    return (
      <>
        <Navigation />
        <Header/>
        <Cards/>
        <SectionOne/>
        <SectionTwo/>
        <Footer/>
      </>
    );
  };

  