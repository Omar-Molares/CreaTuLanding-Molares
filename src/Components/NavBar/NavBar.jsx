import { Link, } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Button } from "react-bootstrap";



export const NavBar = () => {
  return (
    <header>
      <Link to="/"><img className="imgNav" src={"../../public/logitoo.png"} alt="" /></Link>
      

      <nav>
        <Button variant="danger">
          <Link className="linkNav" to="/">Inicio</Link>
        </Button>
        <Button variant="secondary">
          <Link className="linkNav" to="/category/notebooks">Notebooks</Link>
        </Button>
        <Button variant="secondary">
          <Link className="linkNav" to="/category/tablets">Tablets</Link>
        </Button>
        <Button variant="secondary">
          <Link className="linkNav" to="/category/celulares">Celulares</Link>
        </Button>
        <Button variant="secondary">
          <Link className="linkNav" to="/promociones">Promociones</Link>
        </Button>
      </nav>

      <CartWidget />
    </header>
  );
};
