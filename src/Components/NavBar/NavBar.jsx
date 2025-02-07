import { Link, } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header>
      <Link to="/"><img src={"../../public/logito2.png"} alt="" /></Link>
      

      <nav>
        <button>
          <Link to="/">Inicio</Link>
        </button>
        <button>
          <Link to="/category/notebooks">Notebooks</Link>
        </button>
        <button>
          <Link to="/category/tablets">Tablets</Link>
        </button>
        <button>
          <Link to="/category/celulares">Celulares</Link>
        </button>
        <button>
          <Link to="/promociones">Promociones</Link></button>
      </nav>

      <CartWidget />
    </header>
  );
};
