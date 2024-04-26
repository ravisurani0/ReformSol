import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <HashRouter  >
      {/* <Loading /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" Component={Home} />
      </Routes>
      {/* <ScrollToTop /> */}
      <Footer />
    </HashRouter  >
  );
}

export default App;
