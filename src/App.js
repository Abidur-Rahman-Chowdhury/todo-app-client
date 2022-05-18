import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
