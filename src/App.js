import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Sheard/Header/Header';
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Sheard/Footer/Footer';
import NotFoundPage from './components/Sheard/NotFoundPage/NotFoundPage';
import Login from './components/Login/Login/Login';
import Regester from './components/Login/Regester/Regester';
import Products from './components/Home/Products/Products';
import ReaquerAuth from './components/Login/RequaerAuth/ReaquerAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<ReaquerAuth><Products></Products></ReaquerAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/regester' element={<Regester></Regester>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
