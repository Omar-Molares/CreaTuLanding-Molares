import Button from 'react-bootstrap/Button';
import "./count.css"



export const Count = () => {
  return (
<>
    <div className='count'>
     <Button variant="danger"> - </Button>
     <strong> 1 </strong>
     <Button variant="warning"> + </Button>
     <Button variant="secondary">Agragar al carrito</Button> 
    </div>
 </>
  )
}
