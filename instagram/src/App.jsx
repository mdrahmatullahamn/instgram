import logo from './logo.svg';
// import './App.css';
import {Route ,Routes} from 'react-router-dom';
import InSignup from './Component/InSignup';
import InLogin from './Component/InLogin';
import Sidebar  from './Component/Sidebar'
import AddPost from './Component/AddPost';
import Footer from './Component/Footer';
import Profile from './Component/Profile';


function App() {
  return (
    <div className="App">
      <div>

      
      <Routes>
        <Route excat path='/sidebar' element={<Sidebar/>} />
        <Route excat path='/login' element={<InLogin/>} />
        <Route excat path='/signup' element={<InSignup/>} />
        <Route excat path='/post' element={<AddPost/>}/>
        <Route excat path='/footer' element={<Footer/>}/>
        <Route excat path='/profile' element={<Profile/>} />
        </Routes>

      </div>
      
    </div>
  );
}

export default App;
