import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import '../App.css'

const NavBar = ()=>{
return(
    <>
    <nav class="navbar navbar-expand-lg bg-light border bt-1 border-black ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">ERB Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><ItemListContainer texto="Grow " ></ItemListContainer></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " href="#"><ItemListContainer texto="Tabacos"></ItemListContainer></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#"><ItemListContainer texto="Bandejas"></ItemListContainer></a>
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