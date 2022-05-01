import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <UserList />
      </div>
    </div>
  );
}

export default App;
