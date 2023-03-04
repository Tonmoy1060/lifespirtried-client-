import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Login/Registration';
import Footer from './Shared/Footer';
import Header from './Shared/Header';


function App() {
  return (
    <div className="max-w-7xl  mx-auto lg:px-12 px-5 md:px-12">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
