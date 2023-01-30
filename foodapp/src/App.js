import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/login" element={<Login />}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
