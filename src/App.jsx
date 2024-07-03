
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Header />
      {/* slash represent base url */}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch-history' element={<WatchHistory />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
