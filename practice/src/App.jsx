import Home from './components/Home'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <main>
      <div className="sidebar">
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
</div>
           <div className="navbar">
           <div className="navbar">
           <div>
           <h1>navbar</h1>
           </div>

           
       </div>
       <div>
       <Link to='/home'>
          <Home/>
       </Link>
              
           </div>          
           </div>
          
      </main>
    </>
  )
}

export default App
