import { useState ,useEffect} from 'react'

import './App.css'
import LandingPage from './tailwindBlocks/pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)
  const [theme,setTheme]=useState('light');

  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  const handlerThemeChange=()=>{
    setTheme(theme==='light'?'dark':'light')
  }

  return (
    <div>
      <LandingPage change={handlerThemeChange}/>
    </div>
  )
}

export default App
