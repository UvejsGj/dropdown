import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> A Simple Dropdown Menu </h1>
      <ul className='dropdown'>
        <li className='home'> HOME  </li>
        <li className='services'> SERVICES
           <div className='lorem1'>
          <li> Lorem </li>
          <li> Lorem </li>
          <li> Lorem </li>
          </div> 
           </li>
        <li className='about'> ABOUT 
          <div className='lorem2'>
        <li> Lorem </li>
          <li> Lorem </li>
          <li> Lorem </li>
            </div> 
            </li> 
        <li className='blog'> BLOG </li>
        <li className='contact'> CONTACT </li>
      </ul>
    </div>
  );
}

export default App;
