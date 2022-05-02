import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import AddUser from './pages/AddUser/AddUser';
import Home from './pages/Home/Home';
import HomeMain from './pages/HomeMain/HomeMain';
import User from './pages/User/User';
import UserList from './pages/UserList/UserList';

function App() {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route path='/' element={<HomeMain />}>
          <Route index element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/userUpdate' element={<User />} />
          <Route path='/createUser' element={<AddUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
