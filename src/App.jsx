import React from 'react'
import NavBar from './comp/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NewsBoard from './comp/NewsBoard';


const App = () => {
  const [category, setCategory] = React.useState('general');
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App