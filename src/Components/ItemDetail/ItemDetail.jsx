import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../asyncMock";
import { Count } from "../Count/Count";
import "./ItemDetail.css"

export const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
      <div className='conteinerItem'>
        <h1>Detalle de Producto</h1>
        <p>ID: {product?.id}</p>
        <h3>Nombre: {product?.name}</h3>
        <img src={product?.img} alt="" />
        <p>Descripcion: {product?.description}</p>
        <p>Categoria: {product?.category}</p>
        <p>Precio ${product?.price}</p>

        <Count />
      </div>
    </>
  );
};
