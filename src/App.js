import { Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import HomeMain from './pages/HomeMain/HomeMain';
import UserList from './pages/UserList/UserList';

function App() {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path='/' element={<HomeMain />}>
          <Route index element={<Home />} />
          <Route path='/user' element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
