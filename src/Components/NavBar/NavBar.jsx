import { Link, } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Button } from "react-bootstrap";



export const NavBar = () => {
  return (
    <header>
      <Link to="/"><img src={"../../public/logito2.png"} alt="" /></Link>
      

      <nav>
        <Button variant="danger">
          <Link to="/">Inicio</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/category/notebooks">Notebooks</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/category/tablets">Tablets</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/category/celulares">Celulares</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/promociones">Promociones</Link>
        </Button>
      </nav>

      <CartWidget />
    </header>
  );
};
