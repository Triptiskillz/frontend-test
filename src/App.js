// import logo from './logo.svg';
// import './App.css';
import Parent from './NR/Parent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Parent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
