import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import OtherComponents from './components/OtherComponents'
import searchPage from './components/SearchPage/searchPage'

function App() {

  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
    <div className="headerMainContainer">
      <Header open={open} setOpen={setOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
    </div>

      {!open && !searchOpen && (<OtherComponents />)}
    </>
  )
}

export default App
