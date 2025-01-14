import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {
  return (
<header>

<h2>logo comercio</h2>

<nav>    
    <button><a href="">Inicio</a></button>
    <button>Notebooks</button>
    <button>Tablets</button>
    <button>Celulares</button>
</nav>

< CartWidget />


</header>
    
  )
}
