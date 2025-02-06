import { Link } from 'react-router-dom';
import './ItemCard.css';

export const ItemCard = ({ product }) => {
  return (
<>
      <article>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>Stock: {product.stock}</p>
        <p>Price: $ {product.price}</p>
        <button>
          <Link to={`/product/${product.id}`}>Detalles</Link>
        </button>
      </article>
</>
  )
}
