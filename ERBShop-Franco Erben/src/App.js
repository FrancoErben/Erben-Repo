import Cart from './components/Cart';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
const App = ()=> {
  return(
<>
<BrowserRouter>
<NavBar/>
<Routes>
  <Route path='/Producto/:idItem'element={<ItemDetailContainer/>}/>
  <Route path='/' element={<ItemListContainer/>}/> 
  <Route path='/category/:idCategory'element={<ItemListContainer/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
</BrowserRouter>
</>
  
  )
}

export default App;