
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from './components/MyContext';
import { useState } from 'react';
function App() {
  const [sidebarActiveName, setSidebarActiveName] = useState("Dashboard")

  const sideBarTriggered = (title)=>{
    setSidebarActiveName(title)
  }

  return (
    <MyContext.Provider 
    value={{ 
      sidebarActiveName,sideBarTriggered }}
    >
      <Home />
    </MyContext.Provider>
  );
}

export default App;