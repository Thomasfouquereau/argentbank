import React  from 'react';
import Hero from './component/Home_Page/Hero/Hero';
import Features from './component/Home_Page/Features/Features';
import "./App.css";

function App() {
  // check le localstorage pour la presence token
  return (
    <div className="App">
      <Hero />
      <Features />
    </div>
  );
}
export default App;
