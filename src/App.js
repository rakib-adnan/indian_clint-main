import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Global from './Page/Global/Global';
import Home from './Page/Home/Home';
import Manufacturing from './Page/Infrastructure/Manufacture/Manufacturing';
import Packaging from './Page/Infrastructure/Packaging/Packaging';
import ResearchDevelopment from './Page/Infrastructure/Research&Development/R&D';

function App() {
  return (
    <>  
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/global' element={ <Global/> } />
          <Route path='/manufacturing' element={ <Manufacturing/> } />
          <Route path='/packaging' element={ <Packaging/> } />
          <Route path='/research' element={ <ResearchDevelopment/> } />
        </Routes>
      <Footer />
    </>
  );
}

export default App;