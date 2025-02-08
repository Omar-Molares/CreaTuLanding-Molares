/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ItemCard.css';
import Button from 'react-bootstrap/Button';


export const ItemCard = ({ product }) => {
  return (
<>
 <article className='prub'>
      <div className="productCard">
        <h4>{product.name}</h4>
        <img src={product.img} alt="" />
        <p>Precio: $ {product.price}</p>
        <Button variant='secondary'>
          <Link className='link' to={`/product/${product.id}`}>Detalles</Link>
        </Button>
      </div>
  </article>
</>
  )
}
