import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/category/:catId' element={<ItemListContainer/>}/>
        <Route exact path='/product/:id' element={<ItemDetail/>}/>
        <Route exact path='*' element={ <h2>Not Found Error 404</h2> }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
