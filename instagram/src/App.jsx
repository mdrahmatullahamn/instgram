import logo from './logo.svg';
// import './App.css';
import InSignup from './Component/InSignup';
import InLogin from './Component/InLogin';


function App() {
  return (
    <div className="App">
      <div>
      <InSignup/>
      <InLogin/>
      
      {/* <Routes>
        <Route excat path='/register' element={<Regiater/>} />
        <Route excat path='/login' element={<Login/>} />
        <Route excat path='/' element={<Login/>} />

        </Routes> */}

      </div>
      
    </div>
  );
}

export default App;
