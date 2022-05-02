import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import AddUser from './pages/AddUser/AddUser';
import Home from './pages/Home/Home';
import HomeMain from './pages/HomeMain/HomeMain';
import NewProduct from './pages/NewProduct/NewProduct';
import Product from './pages/Product/Product';
import ProductsList from './pages/ProductsList/ProductsList';
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
          <Route path='/userUpdate/:id' element={<User />} />
          <Route path='/createUser' element={<AddUser />} />
          <Route path='/createProducts' element={<NewProduct />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/products/:id' element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
