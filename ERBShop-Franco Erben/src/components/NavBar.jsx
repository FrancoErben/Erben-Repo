import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import '../App.css'
import { Link } from 'react-router-dom'
import { MenuItem } from "@mui/material"
const NavBar = ()=>{
return(
    <>
    <nav class="navbar navbar-expand-lg bg-light border bt-1 border-black ">
    <div class="container-fluid">
        <Link class="navbar-brand" to='/'>ERB Shop</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active"  to='/category/3'><MenuItem>Flandria</MenuItem></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active  " to='/category/4'><MenuItem>Choice</MenuItem></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active"  ><MenuItem>Proximamente.</MenuItem></Link>
            </li>
          </ul>
        </div>        
        <CartWidget classname="text-end" ></CartWidget>
      </div>
</nav>
    
    
    </>
)

}
export default NavBar