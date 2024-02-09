import './App.css';
import QuestionComponent from './components/QuestionComponent.js';
import AddComponent from './components/AddComponent.js';
import CompareComponent from './components/CompareComponent.js';
import HelloComponent from './components/HelloComponent.js';
import HomeComponent from './components/HomeComponent.js';
import MadLibComponent from './components/MadLibComponent.js';
import OddOrEvenComponent from './components/OddOrEvenComponent.js';
import ReverseStrComponent from './components/ReverseStrComponent.js';
import ReverseNumComponent from './components/ReverseNumComponent.js';
import MagicComponent from './components/MagicComponent.js';
import RestaurantComponent from './components/RestaurantComponent.js';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>

    <Routes>
      {/* Route defines our path to the individual components */}
      {/* '/' is our default route */}
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='level0' element={<HelloComponent/>}/>
      <Route path='level1' element={<AddComponent/>}/>
      <Route path='level2' element={<QuestionComponent/>}/>
      <Route path='level3' element={<CompareComponent/>}/>
      <Route path='level4' element={<MadLibComponent/>}/>
      <Route path='level5' element={<OddOrEvenComponent/>}/>
      <Route path='level6' element={<ReverseStrComponent/>}/>
      <Route path='level7' element={<ReverseNumComponent/>}/>
      <Route path='level8' element={<MagicComponent/>}/>
      <Route path='level9' element={<RestaurantComponent/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
