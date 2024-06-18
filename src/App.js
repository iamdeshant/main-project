import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


function App() {

  return (
    <Header>
      <div className='root'>
        <Outlet />
        <Link to='/context'><button className='border-2 border-black pl-2 pr-2 bg-white'>Context</button></Link>
        <Link to='/swiggy'>
          <button className='border-2 border-black pl-2 pr-2 bg-white'>
            SWIGGY
          </button>
        </Link>
      </div>
    </Header>
  );
}

export default App;
