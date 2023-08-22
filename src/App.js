import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Home from './components/Home';
import routes from './routes'



function App(props) {
  

  
  const getRoutes = ((allroutes)=>
    allroutes.map((route)=>
    route.route ?
    
    (<Route exact path={route.route} element={route.component} key={route.name} />):null
    
    )
    )
  
  return (
    <div className="App">
    <header className="App-header">
        <Navbar />
      </header>
    <Routes>
      {getRoutes(routes)}
      <Route exact path="/" element={<Home />} />
      <Route path ="*" element={<Navigate to ='/' />} />
    </Routes>
      
    </div>
  );
}

export default App;
