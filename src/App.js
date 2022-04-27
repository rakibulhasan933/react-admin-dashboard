import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">Others</div>
      </div>
    </div>
  );
}

export default App;
