import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Pages/Services ';
import OurTeam from './Pages/OurTeam';
import CaseStudy from './Pages/CaseStudy';
import CaseDetails from './Pages/CaseDetails';
import Blogs from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Contact from './Pages/Contact';

function App() {
  return (

    <>
       <HashRouter  >
        {/* <Loading /> */}
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/our-team" Component={OurTeam} />
          <Route path="/case-study" Component={CaseStudy} />
          <Route path="/case-study/:caseStudySlug" Component={CaseDetails} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/blog/:blogSlug" Component={BlogDetails} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={Home} />
        </Routes>
        {/* <ScrollToTop /> */}
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
