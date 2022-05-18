import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import MakeTodo from './Pages/MakeTodo/MakeTodo';
import MyTodoList from './Pages/MakeTodo/MyTodoList';
import RequiredAuth from './Pages/RequiredAuth';
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/todo" element={<RequiredAuth>
          <MakeTodo></MakeTodo>
        </RequiredAuth>}></Route>
        <Route path="/myTodo" element={<RequiredAuth>
          <MyTodoList></MyTodoList>
        </RequiredAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
