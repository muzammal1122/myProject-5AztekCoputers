// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


// import Nav from './componets/nav/nav';
import Topnav from './componets/topNav/Topnav';
import Section from './componets/section/Section';
import Modle1 from './componets/modle1/Modle1';
import GoTopage from './componets/goToPage/GoTopage';
import Footer from './componets/footer/Footer';
import ClothingAndShoes from './componets/ClothingAndShoes/ClothingAndShoes';
import ShopingCart from './componets/ShopingCart/ShopingCart';
import Collars from './componets/Collars/Collars';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Topnav></Topnav>
     
     <Routes>
      <Route path='/' element={<Section/>}></Route>
      <Route path='/modle' element={<Modle1/>}></Route>
      <Route path='/ClothingShoes' element={<ClothingAndShoes/>}></Route>
      <Route path='/ShopingCart/:id' element={<ShopingCart/>}></Route>
      <Route path='/Collars' element={<Collars/>}></Route>
     </Routes>
     </BrowserRouter>
     <GoTopage></GoTopage>
     <Footer></Footer>
    </div>
  );
}

export default App;
